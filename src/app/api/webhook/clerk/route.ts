import { Webhook } from "svix";
import { headers } from "next/headers";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "../../../../server/db";
import { users } from "../../../../server/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env",
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
  console.log("Webhook payload:", body);

  if (evt.type === "user.created") {
    const clerkData = evt.data;
    const email = clerkData?.email_addresses[0]?.email_address;
    const clerkId = clerkData.id;

    if (email && clerkId) {
      await db.insert(users).values({
        clerkId,
        fullName: `${clerkData.first_name} ${clerkData.last_name}`,
        email,
        profileImageUrl: clerkData.image_url,
      });
    } else {
      console.error("Error: Missing required user data");
      return new Response("Error: Missing required user data", {
        status: 400,
      });
    }
  }

  if (evt.type === "user.updated") {
    const clerkData = evt.data;
    const email = clerkData?.email_addresses[0]?.email_address;
    const clerkId = clerkData.id;

    if (email && clerkId) {
      await db
        .update(users)
        .set({
          fullName: `${clerkData.first_name} ${clerkData.last_name}`,
          email,
          profileImageUrl: clerkData.image_url,
        })
        .where(eq(users.clerkId, clerkId));
    } else {
      console.error("Error: Missing required user data");
      return new Response("Error: Missing required user data", {
        status: 400,
      });
    }
  }

  if (eventType === "user.deleted") {
    const data = evt.data;

    if (!data.id) {
      console.error("Error: Missing required user data");
      return new Response("Error: Missing required user data", {
        status: 400,
      });
    }

    await db.delete(users).where(eq(users.clerkId, data.id));
    console.log("User deleted");
  }

  return new Response("Webhook received", { status: 200 });
}

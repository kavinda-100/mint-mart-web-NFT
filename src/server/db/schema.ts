import { sql } from "drizzle-orm";
import { pgEnum, pgTable, timestamp } from "drizzle-orm/pg-core";
import * as d from "drizzle-orm/pg-core";

// columns helpers
const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
};

export const rolesEnum = pgEnum("roles", ["seller", "user", "admin"]);

export const users = pgTable(
  "users",
  {
    id: d.uuid("id").primaryKey().defaultRandom(),
    clerkId: d.varchar("clerk_id", { length: 256 }).notNull(),
    email: d.varchar("email", { length: 256 }).notNull(),
    fullName: d.varchar("full_name", { length: 256 }),
    profileImageUrl: d.text("profile_image_url"),
    stripeCustomerId: d.text("stripe_customer_id"),
    role: rolesEnum("role").default("user"),
    ...timestamps,
  },
  (table) => [
    d.uniqueIndex("user_email_idx").on(table.email),
    d.uniqueIndex("clerk_id_idx").on(table.clerkId),
  ],
);

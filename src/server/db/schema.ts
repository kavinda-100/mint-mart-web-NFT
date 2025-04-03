import { sql } from "drizzle-orm";
import { index, pgTable, timestamp } from "drizzle-orm/pg-core";

// columns helpers
const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
};

export const posts = pgTable(
  "post",
  (d) => ({
    id: d.uuid("id").primaryKey(),
    name: d.varchar("name", { length: 256 }),
    ...timestamps,
  }),
  (t) => [index("name_idx").on(t.name)],
);

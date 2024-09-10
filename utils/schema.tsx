import { pgTable,varchar,text,serial } from "drizzle-orm/pg-core";


export const AIOutput = pgTable('ai_output', {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
});

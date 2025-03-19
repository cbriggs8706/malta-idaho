import {
	pgTable,
	bigint,
	text,
	timestamp,
	boolean,
	index,
	smallint,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import person from './person'

export const place = pgTable('place', {
	id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
	name: text(),
	city: text().notNull(),
	county: text().notNull(),
	state: text().notNull(),
	country: text().notNull(),
})

export const placeRelations = relations(place, ({ one, many }) => ({
	person: many(person),
}))

export default place

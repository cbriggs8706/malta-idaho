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

export const marriage = pgTable('marriage', {
	id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
	spouseAId: bigint({ mode: 'number' })
		.references(() => person.id)
		.notNull(),
	spouseBId: bigint({ mode: 'number' })
		.references(() => person.id)
		.notNull(),
	marriageYear: smallint(),
	marriageMonth: smallint(),
	marriageDay: smallint(),
	divorceYear: smallint(),
	divorceMonth: smallint(),
	divorceDay: smallint(),
	additionalInfo: text(),
})

export const marriageRelations = relations(marriage, ({ one }) => ({
	spouseA: one(person, {
		fields: [marriage.spouseAId],
		references: [person.id],
		relationName: 'marriagesAsSpouseA',
	}),
	spouseB: one(person, {
		fields: [marriage.spouseBId],
		references: [person.id],
		relationName: 'marriagesAsSpouseB',
	}),
}))

export default marriage

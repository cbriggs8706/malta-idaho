import { pgTable, bigint, text, boolean, smallint } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

import { marriage } from './marriage'
import { place } from './place'

export const person = pgTable('person', {
	id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
	firstNames: text().notNull(),
	lastNames: text().notNull(),
	marriedName: text(),
	nicknames: text(),
	birthYear: smallint(),
	birthMonth: smallint(),
	birthDay: smallint(),
	birthPlaceId: bigint({ mode: 'number' }).references(() => place.id),
	deathYear: smallint(),
	deathMonth: smallint(),
	deathDay: smallint(),
	deathPlaceId: bigint({ mode: 'number' }).references(() => place.id),
	additionalInfo: text(),
	internalNotes: text(),
	isVisible: boolean().default(true),
	father: bigint({ mode: 'number' }),
	mother: bigint({ mode: 'number' }),
})

export const personRelations = relations(person, ({ one, many }) => ({
	father: one(person, { fields: [person.father], references: [person.id] }),
	mother: one(person, { fields: [person.mother], references: [person.id] }),
	marriagesAsSpouseA: many(marriage, { relationName: 'marriagesAsSpouseA' }),
	marriagesAsSpouseB: many(marriage, { relationName: 'marriagesAsSpouseB' }),
	birthPlace: one(place, {
		fields: [person.birthPlaceId],
		references: [place.id],
	}),
	deathPlace: one(place, {
		fields: [person.deathPlaceId],
		references: [place.id],
	}),
}))

export default person

CREATE TABLE "marriage" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "marriage_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"spouseAId" bigint NOT NULL,
	"spouseBId" bigint NOT NULL,
	"marriageYear" smallint,
	"marriageMonth" smallint,
	"marriageDay" smallint,
	"divorceYear" smallint,
	"divorceMonth" smallint,
	"divorceDay" smallint,
	"additionalInfo" text
);
--> statement-breakpoint
CREATE TABLE "person" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "person_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"firstNames" text NOT NULL,
	"lastNames" text NOT NULL,
	"marriedName" text,
	"nicknames" text,
	"birthYear" smallint,
	"birthMonth" smallint,
	"birthDay" smallint,
	"birthPlaceId" bigint,
	"deathYear" smallint,
	"deathMonth" smallint,
	"deathDay" smallint,
	"deathPlaceId" bigint,
	"additionalInfo" text,
	"internalNotes" text,
	"isVisible" boolean DEFAULT true,
	"father" bigint,
	"mother" bigint
);
--> statement-breakpoint
ALTER TABLE "marriage" ADD CONSTRAINT "marriage_spouseAId_person_id_fk" FOREIGN KEY ("spouseAId") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "marriage" ADD CONSTRAINT "marriage_spouseBId_person_id_fk" FOREIGN KEY ("spouseBId") REFERENCES "public"."person"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "person" ADD CONSTRAINT "person_birthPlaceId_place_id_fk" FOREIGN KEY ("birthPlaceId") REFERENCES "public"."place"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "person" ADD CONSTRAINT "person_deathPlaceId_place_id_fk" FOREIGN KEY ("deathPlaceId") REFERENCES "public"."place"("id") ON DELETE no action ON UPDATE no action;
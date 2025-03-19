CREATE TABLE "place" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "place_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" text,
	"city" text NOT NULL,
	"county" text NOT NULL,
	"state" text NOT NULL,
	"country" text NOT NULL
);

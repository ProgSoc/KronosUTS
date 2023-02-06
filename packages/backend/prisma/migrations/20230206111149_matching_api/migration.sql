/*
  Warnings:

  - The primary key for the `Subject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Subject` table. All the data in the column will be lost.
  - Added the required column `activity_count` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `callista_code` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campus` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_address` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `faculty` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manager` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `show_on_timetable` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject_code` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_pkey",
DROP COLUMN "id",
ADD COLUMN     "activity_count" INTEGER NOT NULL,
ADD COLUMN     "callista_code" TEXT NOT NULL,
ADD COLUMN     "campus" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "email_address" TEXT NOT NULL,
ADD COLUMN     "faculty" TEXT NOT NULL,
ADD COLUMN     "manager" TEXT NOT NULL,
ADD COLUMN     "semester" TEXT NOT NULL,
ADD COLUMN     "show_on_timetable" INTEGER NOT NULL,
ADD COLUMN     "subject_code" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Subject_pkey" PRIMARY KEY ("subject_code");

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "subject_code" TEXT NOT NULL,
    "activity_group_code" TEXT NOT NULL,
    "activity_code" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "day_of_week" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "staff" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "selectable" TEXT NOT NULL,
    "availability" INTEGER NOT NULL,
    "week_pattern" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "zone" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "semester_description" TEXT NOT NULL,
    "activity_type" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "cluster" TEXT NOT NULL,
    "activitiesDays" TEXT[],
    "subjectSubject_code" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_subjectSubject_code_fkey" FOREIGN KEY ("subjectSubject_code") REFERENCES "Subject"("subject_code") ON DELETE SET NULL ON UPDATE CASCADE;

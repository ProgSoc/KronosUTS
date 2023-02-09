/*
  Warnings:

  - A unique constraint covering the columns `[callista_code,semester]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Subject_callista_code_semester_key" ON "Subject"("callista_code", "semester");

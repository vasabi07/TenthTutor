/*
  Warnings:

  - A unique constraint covering the columns `[answerpaperId,questionId]` on the table `Answer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `questionId` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AnswerPaper" DROP CONSTRAINT "AnswerPaper_subtopicId_fkey";

-- DropForeignKey
ALTER TABLE "QuestionPaper" DROP CONSTRAINT "QuestionPaper_subtopicId_fkey";

-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "questionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AnswerPaper" ALTER COLUMN "subtopicId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QuestionPaper" ALTER COLUMN "subtopicId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Answer_answerpaperId_questionId_key" ON "Answer"("answerpaperId", "questionId");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionPaper" ADD CONSTRAINT "QuestionPaper_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "Subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerPaper" ADD CONSTRAINT "AnswerPaper_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "Subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

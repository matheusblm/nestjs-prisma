/*
  Warnings:

  - Added the required column `fk_id_author` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "fk_id_author" TEXT NOT NULL,
    CONSTRAINT "books_fk_id_author_fkey" FOREIGN KEY ("fk_id_author") REFERENCES "author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_books" ("bar_code", "description", "id", "title") SELECT "bar_code", "description", "id", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_bar_code_key" ON "books"("bar_code");
CREATE UNIQUE INDEX "books_fk_id_author_key" ON "books"("fk_id_author");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

import BookCard from "~/_components/BookCard";
import prisma from "../lib/prisma";
import { Book } from "@prisma/client";

async function getReadBooks(): Promise<Book[]> {
  return await prisma.book.findMany({
    where: { status: "READ" },
  });
}

async function getCurrentlyReadingBooks(): Promise<Book[]> {
  return await prisma.book.findMany({
    where: { status: "READING" },
  });
}

export default async function BooksPage() {
  const readBooks = await getReadBooks();
  const currentlyReadingBooks = await getCurrentlyReadingBooks();
  console.log({ readBooks });

  return (
    <main className="flex flex-1 flex-col mobile:overflow-y-scroll mobile:px-8 mobile:pb-40 mobile:pt-24 desktop:p-8">
      <h1 className="text-2xl font-bold" style={{ paddingBottom: "1rem" }}>
        reading
      </h1>
      <div className="flex flex-1 flex-wrap items-start gap-4 mobile:justify-center desktop:justify-start">
        {currentlyReadingBooks.map((book) => {
          return (
            <div key={book.id} className="flex flex-col">
              <BookCard book={book} />
            </div>
          );
        })}
      </div>
      <h1 className="py-2 text-2xl font-bold">read</h1>
      <div className="flex flex-1 flex-wrap items-start  gap-4 mobile:justify-center desktop:justify-start">
        {readBooks.map((book) => {
          return (
            <div key={book.id} className="flex flex-col">
              <BookCard book={book} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

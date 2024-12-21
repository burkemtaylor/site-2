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
    <main className="flex flex-1 flex-col p-8">
      <h1 className="text-2xl font-bold" style={{ paddingBottom: "1rem" }}>
        reading
      </h1>
      <div className="flex flex-1 flex-wrap items-start justify-start gap-4">
        {currentlyReadingBooks.map((book) => {
          return (
            <div key={book.id} className="flex flex-col">
              <BookCard book={book} />
            </div>
          );
        })}
      </div>
      <h1 className="text-2xl font-bold" style={{ paddingBottom: "1rem" }}>
        read
      </h1>
      <div className="flex flex-1 flex-wrap items-start justify-start gap-4">
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

import { Book } from "~/interfaces/book";
import Card from "./_primitives/card";
import Link from "next/link";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div>
      <Card>
        <Link
          className="tooltip tooltip-bottom tooltip-primary"
          data-tip={book.title}
          target="_blank"
          href={book.link}
        >
          <img
            src={book.cover}
            style={{ width: "100px", height: "154px", objectFit: "cover" }}
          ></img>
        </Link>
      </Card>
    </div>
  );
}

export interface Book {
  id: number;
  title: string;
  cover: string;
  author: string;
  review?: string | null;
  rating?: number | null;
  yearRead?: number | null;
  link: string;
  status: BookStatus;
}

export type BookStatus = "READ" | "READING" | "WANT_TO_READ";

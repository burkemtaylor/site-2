import Link from "next/link";

export interface TimelineItemProps {
  date: string;
  link?: string;
  title: string;
  description: string;
  index: number;
}

function CheckMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function TimelineItem({
  date,
  link,
  title,
  description,
  index,
}: TimelineItemProps) {
  <li>
    <div className="timeline-middle">
      <CheckMark />
    </div>
    <div
      className={
        "md:text-end mb-10" + (index % 2) ? "timeline-start" : "timeline-end"
      }
    >
      <time className="font-mono italic">{date}</time>
      <div>
        {link ? (
          <Link
            href={link}
            className="link text-lg font-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </Link>
        ) : (
          <div className="link text-lg font-black">{title}</div>
        )}
      </div>
      {description}
    </div>
    <hr />
  </li>;
}

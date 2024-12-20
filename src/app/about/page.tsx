"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Card from "~/_components/_primitives/card";

export default function AboutPage() {
  const RESUME_URL =
    "https://utfs.io/f/c6397cca-c11e-4b63-bab6-2a82f464a791-6uferf.pdf";

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.8, type: "spring" }}
      className="flex h-full w-full flex-1 flex-col items-center gap-8 overflow-y-auto p-8"
    >
      <Card
        className={
          "h-full w-full min-w-min items-center rounded bg-cover bg-fixed bg-center"
        }
        style={{
          cursor: "pointer",
        }}
      >
        <img
          style={{ width: "65%" }}
          src="https://utfs.io/f/pkvLaKJrGXkyOtdXvsoZ3JT6PIN0ESWYe7fKnQdkXshOtFpA"
        ></img>
      </Card>

      <ul className="max-md:timeline-compact timeline timeline-vertical timeline-snap-icon">
        <li>
          <div className="timeline-middle">
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
          </div>
          <div className="md:text-end timeline-start mb-10">
            <time className="font-mono italic">2020-Present</time>
            <div>
              <Link
                href="https://www.onetrust.com/"
                className="link text-lg font-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                OneTrust
              </Link>
            </div>
            frontend software engineer developing and maintaining reusable
            components ranging from simple structural tools to complex and
            re-usable workflow-builders to empower product teams
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
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
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">May 2020</time>
            <div className="text-lg font-black">BS in Computer Science</div>
            graduated from the Georgia Institute of Technology with Honors
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
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
          </div>
          <div className="md:text-end timeline-start mb-10">
            <time className="font-mono italic">Summer 2019</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and
            multi-purpose mobile devices designed and marketed by Apple Inc. The
            first version was released on October 23, 2001, about 8+1⁄2 months
            after the Macintosh version of iTunes was released. Apple sold an
            estimated 450 million iPod products as of 2022. Apple discontinued
            the iPod product line on May 10, 2022. At over 20 years, the iPod
            brand is the oldest to be discontinued by Apple
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
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
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use
            Apple's own iOS mobile operating system. The first-generation iPhone
            was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
            then, Apple has annually released new iPhone models and iOS updates.
            As of November 1, 2018, more than 2.2 billion iPhones had been sold.
            As of 2022, the iPhone accounts for 15.6% of global smartphone
            market share
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
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
          </div>
          <div className="md:text-end timeline-start mb-10">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It
            incorporates fitness tracking, health-oriented capabilities, and
            wireless telecommunication, and integrates with iOS and other Apple
            products and services
          </div>
        </li>
      </ul>

      <div className="justify-right flex gap-2 px-16 pb-16 pt-8">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link className="btn btn-secondary" href="/contact">
            email me
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            className="btn btn-primary"
            download
            href={RESUME_URL}
            target="_blank"
          >
            download resume
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
}

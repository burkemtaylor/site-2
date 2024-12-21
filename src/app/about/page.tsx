"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CallToAction from "~/_components/CallToAction";
import Card from "~/_components/_primitives/card";

export default function AboutPage() {
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
          style={{
            maxWidth: "850px",
            objectFit: "cover",
            overflow: "hidden",
            maxHeight: "60vh",
          }}
          src="https://utfs.io/f/pkvLaKJrGXkyOtdXvsoZ3JT6PIN0ESWYe7fKnQdkXshOtFpA"
        ></img>
      </Card>
      <p
        style={{
          maxWidth: "850px",
        }}
      >
        hi, i'm burke. i've been a software developer for 5 years. in this
        domain i've focused on code reusability and facilitating high quality
        user experiences. i'm also passionate about books, film, games and
        music, having founded my band{" "}
        <Link
          className="link"
          href="https://open.spotify.com/artist/5TJqhIWpu8vyHOmR2Z5Wow"
          target="_blank"
          rel="noopener noreferrer"
        >
          luminism
        </Link>{" "}
        in 2019.
      </p>
      <CallToAction />
    </motion.div>
  );
}

"use client";

import AboutCardList from "~/_components/AboutCardStack";
import { AboutData } from "~/constants/aboutData";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.8, type: "spring" }}
      className="flex h-full w-full flex-1 flex-col items-center gap-4 p-8"
    >
      <AboutCardList aboutItems={AboutData} />
    </motion.div>
  );
}

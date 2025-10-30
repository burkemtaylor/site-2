"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-base-100">
      <div className="hero flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 font-bold text-primary mobile:text-3xl desktop:text-5xl">
                hi, i'm burke
              </h1>
              <p className="text-primary-contrast mb-5">
                i've been building & maintaining software for 5 years.
              </p>
              <div className="flex justify-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link className="btn btn-secondary" href="/about">
                    get to know me
                  </Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link className="btn btn-primary" href="/work">
                    see my work
                  </Link>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

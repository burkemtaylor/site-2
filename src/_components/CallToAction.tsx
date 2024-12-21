import { motion } from "framer-motion";
import Link from "next/link";
import { transitonDelay } from "~/_utilities/transitionDelay";

const RESUME_URL =
  "https://utfs.io/f/c6397cca-c11e-4b63-bab6-2a82f464a791-6uferf.pdf";

const visible = {
  opacity: 1,
  x: 0,
};

const hidden = {
  opacity: 0,
  x: -250,
};

export default function CallToAction() {
  return (
    <motion.div
      initial={hidden}
      animate={visible}
      transition={{ delay: transitonDelay(1) }}
      className="justify-right flex gap-2 px-16 pb-16 pt-8"
    >
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
    </motion.div>
  );
}

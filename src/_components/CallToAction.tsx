import { motion } from "framer-motion";
import Link from "next/link";
import { transitionDelay } from "~/_utilities/transitionDelay";

const RESUME_URL =
  "https://ocg9xz0ve4.ufs.sh/f/pkvLaKJrGXkyvURYd7ZVEVD10rbO2GN3edufL8WTSXQtiKq9";

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
      transition={{ delay: transitionDelay(1) }}
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

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { HeaderProps } from "~/interfaces/header";

export default function Header({ title, menuItems }: HeaderProps) {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div className="flex-1 pl-2">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/" className="btn btn-ghost text-xl">
            {title}
          </Link>
        </motion.button>
      </div>
      <div className="desktop:flex mobile:hidden">
        <ul className="menu menu-horizontal px-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={item.link}>{item.name}</Link>
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile:flex-none desktop:hidden">
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </motion.button>
      </div>
    </nav>
  );
}

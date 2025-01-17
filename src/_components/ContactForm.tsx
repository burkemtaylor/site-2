import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

// TODO: Make this content agnostic

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    console.log({ name, email, message });
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      id="contactForm"
      className="flex-column flex max-w-lg flex-wrap justify-end gap-4 mobile:px-4"
      onSubmit={onSubmit}
    >
      <label className="input input-bordered input-primary flex w-full items-center gap-2 bg-neutral text-neutral-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Name"
          value={name}
          onChange={(i) => setName(i.target.value)}
        />
      </label>
      <label className="input input-bordered input-primary flex w-full items-center gap-2 bg-neutral text-neutral-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="email"
          className="grow"
          placeholder="Email"
          value={email}
          onChange={(i) => setEmail(i.target.value)}
        />
      </label>
      <textarea
        className="textarea textarea-bordered textarea-primary flex max-h-80 w-full items-center gap-2 bg-neutral text-neutral-content"
        placeholder="Message"
        style={{ height: "10rem" }}
        value={message}
        onChange={(i) => setMessage(i.target.value)}
      ></textarea>
      <motion.button
        className="btn btn-primary"
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Submit
      </motion.button>
    </form>
  );
}

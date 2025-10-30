import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { transitionDelay } from "~/_utilities/transitionDelay";

// TODO: Make this content agnostic

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setSubmitted(false);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        setSubmitting(false);
        setMessage("");
        setName("");
        setEmail("");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      {submitted && <ContactFormConfirmation />}

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
          maxLength={1000}
          onChange={(i) => setMessage(i.target.value)}
        ></textarea>
        <motion.button
          className="btn btn-primary"
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {submitting ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : (
            "Submit"
          )}
        </motion.button>
      </form>
    </section>
  );
}

export function ContactFormConfirmation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Trigger fade-out after a duration
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: transitionDelay(1) }}
          className="absolute top-16 z-10 flex w-full flex-col items-center justify-center gap-4 p-8 text-neutral-content"
        >
          <div className="mt-4 flex w-full flex-col gap-4">
            <div role="alert" className="alert alert-success w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your message has been sent!</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

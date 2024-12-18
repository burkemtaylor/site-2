"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function transitonDelay(x?: number): number {
  return x ? x * 0.1 : 0;
}

export default function ResumePage() {
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

  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="justify-left flex flex-col gap-6  px-16 pt-16"
      >
        {/*Name & Contact Info*/}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ delay: transitonDelay(0) }}
          className="gap-8"
        >
          <h1 className="text-3xl font-bold">Burke Taylor</h1>
          <div className="flex flex-wrap gap-1">
            <p>980-475-1564</p>
            <p>burkemtaylor@gmail.com</p>
            <Link
              className="link"
              href="https://linkedin.com/in/burke-taylor"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/burke-taylor
            </Link>
          </div>
        </motion.div>
        {/*Objective*/}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ delay: transitonDelay(1) }}
          className="gap-8"
        >
          <h1 className="text-2xl font-bold">Objective</h1>
          <div className="flex flex-row gap-4">
            <p>
              Front-end developer with over ve years of experience seeking a
              stimulating and challenging opportunity where I can leverage my
              strong technical, problem-solving, communication, and leadership
              skills
            </p>
          </div>
        </motion.div>

        {/*Education*/}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ delay: transitonDelay(2) }}
          className="gap-8"
        >
          <h1 className="text-2xl font-bold">Education</h1>
          <div className="flex flex-row gap-4">
            <p>
              Georgia Institute of Technology — BS, Computer Science with
              Honors, May 2020
            </p>
          </div>
        </motion.div>

        {/*Experience*/}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ delay: transitonDelay(3) }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-2xl font-bold">Experience</h1>
          <div className="flex flex-col gap-2 px-8">
            <div>
              <div className="flex flex-row gap-2">
                <p className="text-xl">SOFTWARE ENGINEER</p>
                <Link
                  href="https://www.onetrust.com/"
                  className="link text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ONETRUST
                </Link>
              </div>
              <p className="align-bottom text-xs">
                Summer 2019 (intern), 2020-Present
              </p>
            </div>

            <ul className="flex flex-col">
              <li>
                Develop and maintain reusable components ranging from simple
                structural tools to complex and usable workflow-builders to
                empower product teams.
              </li>
              <li>
                Collaborate with the UX team to develop and deliver refreshed
                user interfaces and enhancements.
              </li>
              <li>
                Support a culture of code excellence through code reviews,
                encouraging code standards, and ensuring code reusability.
              </li>
              <li>
                Vocal and active leader in product design process, communicating
                implementation options to assess trade-offs for full-stack
                solution designs.
              </li>
              <li>
                Delivered a full UI Refresh and rebrand in less than five
                months.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 px-8">
            <div>
              <div className="flex flex-row gap-2">
                <p className="text-xl">SOFTWARE DEVELOPMENT INTERN</p>
                <Link
                  href="https://www.manh.com/"
                  className="link text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manhattan Associates, Inc.
                </Link>
              </div>

              <p className="text-xs">Summer 2017 & 2018</p>
            </div>

            <ul className="flex flex-col">
              <li>
                Developed a UI (Angular, HTML5/CSS3) for the Config Director
                tool and enhanced the Omni-channel application UIs to display
                data in grid and list modes
              </li>
              <li>
                Converted Knitter/Apache CXF web service to Spring MVC for
                warehouse and transportation applications
              </li>
            </ul>
          </div>
        </motion.div>

        {/*Skills*/}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ delay: transitonDelay(4) }}
          className="gap-8"
        >
          <h1 className="text-2xl font-bold">Skills</h1>
          <div className="flex flex-wrap gap-4">
            <div className="tooltip tooltip-bottom" data-tip="Javascript">
              <img
                src="https://utfs.io/f/623f1ea4-3027-44c4-a614-a6f24700cdf9-2mh.svg"
                height="36"
                width="36"
                role="img"
                alt="JavaScript logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Angular">
              <img
                src="https://utfs.io/f/882de73d-2117-4e82-9b09-97b3636c3426-e75dem.svg"
                height="36"
                width="36"
                role="img"
                alt="Angular logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="ReactJS">
              <img
                src="https://utfs.io/f/e00b3088-2e9a-449d-a79a-e55a6d4afa8b-1sj3pb.svg"
                height="36"
                width="36"
                role="img"
                alt="ReactJS logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="NextJS">
              <img
                src="https://utfs.io/f/1e096b12-769c-410d-8628-eaf004ad7e1c-hcfblw.svg"
                height="36"
                width="36"
                role="img"
                alt="NextJS logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="RxJS">
              <img
                src="https://utfs.io/f/fb60eff1-c390-448a-9198-3a34d4cc898b-23c3z.png"
                height="36"
                width="36"
                role="img"
                alt="RxJS logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="HTML5">
              <img
                src="https://utfs.io/f/55ac22eb-ebf7-4bda-bcca-eb9881f64d4b-1nazmy.svg"
                height="36"
                width="36"
                role="img"
                alt="HTML5 logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="VSCode">
              <img
                src="https://utfs.io/f/7ad36b80-cf2b-4870-aea4-eaab7034f6e5-dcqqqe.svg"
                height="36"
                width="36"
                role="img"
                alt="VSCode logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Git">
              <img
                src="https://utfs.io/f/877eaa2c-7bfc-4935-9785-3109840f403e-26z6.svg"
                height="36"
                width="36"
                role="img"
                alt="Git logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Java">
              <img
                src="https://utfs.io/f/3285d5fa-2be9-42e7-b751-cbaaf6f5cc6c-1xrfm.svg"
                height="36"
                width="36"
                role="img"
                alt="Java logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Docker">
              <img
                src="https://utfs.io/f/7ef632dd-7c90-41ea-8764-5b2ab744db2d-lxr74w.svg"
                height="36"
                width="36"
                role="img"
                alt="Docker logo"
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="SQL">
              <img
                src="https://utfs.io/f/47609adf-c90a-4bfd-a49e-28e97597db97-2g26.svg"
                height="36"
                width="36"
                role="img"
                alt="SQL logo"
              />
            </div>
          </div>
        </motion.div>

        {/*Hobbies*/}
        <motion.div
          initial={hidden}
          animate={visible}
          transition={{ delay: transitonDelay(5) }}
          className="gap-8"
        >
          <h1 className="text-2xl font-bold">Hobbies</h1>
          <div className="flex flex-row gap-4">
            <p>
              {`Musician, performer, song writer, and producer for the band `}
              <Link
                className="link"
                href="https://open.spotify.com/artist/5TJqhIWpu8vyHOmR2Z5Wow"
                target="_blank"
                rel="noopener noreferrer"
              >
                luminism
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={hidden}
        animate={visible}
        transition={{ delay: transitonDelay(6) }}
        className="justify-right flex gap-2 px-16 pb-16 pt-8"
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link className="btn btn-secondary" href="/about">
            Get to know me
          </Link>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            className="btn btn-primary"
            download
            href={RESUME_URL}
            target="_blank"
          >
            Download Resume
          </Link>
        </motion.button>
      </motion.div>
    </main>
  );
}

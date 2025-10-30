"use client";

import { motion } from "framer-motion";
import { transitionDelay } from "~/_utilities/transitionDelay";
import CallToAction from "~/_components/CallToAction";
import AngularIcon from "~/_components/_icons/angular";
import AtlassianIcon from "~/_components/_icons/atlassian";
import CSSIcon from "~/_components/_icons/css";
import CypressIcon from "~/_components/_icons/cypress";
import FigmaIcon from "~/_components/_icons/figma";
import GitLabIcon from "~/_components/_icons/gitlab";
import HTMLIcon from "~/_components/_icons/html";
import JasmineIcon from "~/_components/_icons/jasmine";
import JavaScriptIcon from "~/_components/_icons/javacsript";
import NPMIcon from "~/_components/_icons/npm";
import PnpmIcon from "~/_components/_icons/pnpm";
import VSCodeIcon from "~/_components/_icons/vscode";
import GitIcon from "~/_components/_icons/git";
import BashIcon from "~/_components/_icons/bash";
import DrizzleIcon from "~/_components/_icons/drizzle";
import GitHubCopilotIcon from "~/_components/_icons/github-copilot";
import GoIcon from "~/_components/_icons/go";
import NeovimIcon from "~/_components/_icons/neovim";
import NextJsIcon from "~/_components/_icons/nextjs";
import PrismaIcon from "~/_components/_icons/prisma";
import ReactIcon from "~/_components/_icons/react";
import RedisIcon from "~/_components/_icons/redis";
import TailwindIcon from "~/_components/_icons/tailwind";
import CheckmarkIcon from "~/_components/_icons/checkmark";
import SpringMvcIcon from "~/_components/_icons/springmvc";
import { projectData } from "~/constants/projects";
import ProjectCard from "~/_components/ProjectCard";

const visible = {
  opacity: 1,
  x: 0,
};

const hidden = {
  opacity: 0,
  x: -250,
};

export default function ResumePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-transparent mobile:overflow-y-scroll mobile:pb-24 mobile:pt-8 desktop:p-0">
      <motion.div
        initial={hidden}
        animate={visible}
        transition={{ delay: transitionDelay(0) }}
        className="gap-8 pt-8"
      >
        <div className="flex text-justify mobile:flex-col mobile:p-8 desktop:flex-row desktop:p-4">
          <h1 className="text-xl mobile:flex mobile:justify-center mobile:pb-2 desktop:pr-4">
            Tools I use at work
          </h1>
          <div className="flex flex-wrap gap-4 mobile:justify-center desktop:items-center">
            <div className="tooltip tooltip-bottom" data-tip="Angular">
              <AngularIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Atlassian">
              <AtlassianIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="CSS">
              <CSSIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Cypress">
              <CypressIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Figma">
              <FigmaIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Git">
              <GitIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="GitLab">
              <GitLabIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="HTML">
              <HTMLIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Jasmine">
              <JasmineIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="JavaScript">
              <JavaScriptIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="NPM">
              <NPMIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Pnpm">
              <PnpmIcon />
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
            <div className="tooltip tooltip-bottom" data-tip="VSCode">
              <VSCodeIcon />
            </div>
          </div>
        </div>
        <div className="flex text-justify mobile:flex-col mobile:p-8 desktop:flex-row desktop:p-4">
          <h1 className="text-xl mobile:flex mobile:justify-center mobile:pb-2 desktop:pr-4">
            Other tooles I use
          </h1>
          <div className="flex flex-wrap gap-4 mobile:justify-center desktop:items-center">
            <div className="tooltip tooltip-bottom" data-tip="Bash">
              <BashIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Drizzle">
              <DrizzleIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="GitHub Copilot">
              <GitHubCopilotIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Go">
              <GoIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Neovim">
              <NeovimIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Next.js">
              <NextJsIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Prisma">
              <PrismaIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="React">
              <ReactIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Redis">
              <RedisIcon />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Tailwind CSS">
              <TailwindIcon />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: transitionDelay(1) }}
        className="max-md:timeline-compact timeline timeline-vertical timeline-snap-icon px-10 pt-10"
      >
        <li>
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:text-end timeline-start mb-10">
            <div className="text-lg font-black">Coding continues...</div>
            <div className="flex flex-row gap-2 pt-2"></div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:mb-10 timeline-end">
            <time className="font-mono italic">May 2025</time>
            <div className="text-lg font-black">
              Promoted to Senior SWE at OneTrust
            </div>
            <div className="flex flex-row gap-2 pt-2"></div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:text-end timeline-start mb-10">
            <time className="font-mono italic">April 2021</time>
            <div className="text-lg font-black">
              Promoted to SWE at OneTrust
            </div>
            <div className="flex flex-row gap-2 pt-2"></div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:mb-10 timeline-end">
            <time className="font-mono italic">March 2020</time>
            <div className="text-lg font-black">Associate SWE at OneTrust</div>
            <div className="flex flex-row gap-2 pt-2"></div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:text-end timeline-start mb-10">
            <time className="font-mono italic">Summer 2018, 2019</time>
            <div className="text-lg font-black">SWE Intern at OneTrust</div>
            <div className="flex flex-row gap-2 pt-2"></div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:mb-10 timeline-end">
            <time className="font-mono italic">June 2017</time>
            <div className="text-lg font-black">
              SWE Intern at Manhattan Associates
            </div>
            <div></div>
            <div className="flex flex-row gap-2 pt-2"></div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:text-end timeline-start mb-10">
            <time className="font-mono italic">August 2016</time>
            <div className="text-lg font-black">Started BS CS at GA Tech</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:mb-10 timeline-end">
            <time className="font-mono italic">May 2016</time>
            <div className="text-lg font-black">
              Won Sr. Developer Award at Pope Highschool
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <CheckmarkIcon />
          </div>
          <div className="md:text-end timeline-start mb-10">
            <div className="text-lg font-black">Coding begins...</div>
          </div>
        </li>
      </motion.ul>
      <div
        id="cardContainer"
        className="flex flex-1 flex-row flex-wrap justify-center gap-4 p-8"
      >
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <CallToAction />
    </main>
  );
}

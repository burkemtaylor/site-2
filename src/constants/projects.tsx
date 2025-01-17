import { Prisma } from "@prisma/client";
import React from "react";
import AngularIcon from "~/_components/_icons/angular";
import NextJsIcon from "~/_components/_icons/nextjs";
import OdinIcon from "~/_components/_icons/odin";
import PostgresIcon from "~/_components/_icons/postgres";
import PrismaIcon from "~/_components/_icons/prisma";
import ReactIcon from "~/_components/_icons/react";
import { nodeWrapper } from "~/_utilities/nodeWrapper";
import { ProjectCardProps } from "~/interfaces/project";

export const projectData: ProjectCardProps[] = [
  {
    title: "esoterica",
    description: "an isometric game",
    link: "https://github.com/burkemtaylor/esoterica",
    children: nodeWrapper([OdinIcon()]),
  },
  {
    title: "luminism",
    description: "w.i.p. site for my band luminism",
    link: "https://github.com/burkemtaylor/luminism",
    children: nodeWrapper([NextJsIcon()]),
  },
  {
    title: "reangular",
    description: "experimenting with rendering React inside Angular apps",
    link: "https://github.com/burkemtaylor/reangular",
    children: nodeWrapper([AngularIcon(), ReactIcon()]),
  },
  {
    title: "site-2",
    description: "the site you're on right now!",
    link: "https://github.com/burkemtaylor/site-2",
    children: nodeWrapper([NextJsIcon(), PrismaIcon(), PostgresIcon()]),
  },
];

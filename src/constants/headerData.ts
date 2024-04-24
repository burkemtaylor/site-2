import { HeaderProps } from "~/interfaces/header";

export const headerData: HeaderProps = {
  title: "burke taylor",
  menuItems: [
    { name: "resume", link: "/resume" },
    {
      name: "projects",
      link: "/projects",
      children: [
        { name: "project1", link: "/project1" },
        { name: "project2", link: "/project2" },
      ],
    },
    { name: "contact", link: "/contact" },
    { name: "about", link: "/about" },
  ],
};

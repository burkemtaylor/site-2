import { HeaderProps } from "~/interfaces/header";

export const headerData: HeaderProps = {
  title: "burke taylor",
  menuItems: [
    { name: "work", link: "/work" },
    { name: "books", link: "/books" },
    { name: "music", link: "/music" },
    // {
    //   name: "projects",
    //   link: "/projects",
    //   children: [
    //     { name: "project1", link: "/project1" },
    //     { name: "project2", link: "/project2" },
    //   ],
    // },
    // { name: "contact", link: "/contact" },
    { name: "about", link: "/about" },
  ],
};

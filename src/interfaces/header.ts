export interface MenuItems {
  name: string;
  link: string;
  children?: MenuItems[];
}

export interface HeaderProps {
  title: string;
  menuItems: MenuItems[];
}

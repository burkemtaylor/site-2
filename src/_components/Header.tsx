import Link from "next/link";
import { HeaderProps } from "~/interfaces/header";

export default function Header({ title, menuItems }: HeaderProps) {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          {title}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

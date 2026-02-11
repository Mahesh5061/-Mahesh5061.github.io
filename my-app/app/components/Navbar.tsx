"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b">
      <h1 className="text-xl font-bold">Mahesh</h1>

      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              } hover:text-blue-500`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

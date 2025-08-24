"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-[80px] w-[650px] bg-[#252525] border border-gray-700 ml-[650px] mt-32 rounded-4xl flex flex-row items-center justify-center space-x-12 px-8">
      <Link
        href="/"
        className={pathname === "/" ? "text-lime-300 text-2xl" : "text-amber-50 text-2xl"}
      >
        About
      </Link>
      <Link
        href="/resume"
        className={pathname === "/resume" ? "text-lime-300 text-2xl" : "text-amber-50 text-2xl"}
      >
        Resume
      </Link>
      <Link
        href="/portfolio"
        className={pathname === "/portfolio" ? "text-lime-300 text-2xl" : "text-amber-50 text-2xl"}
      >
        Portfolio
      </Link>
      <Link
        href="/contact"
        className={pathname === "/contact" ? "text-lime-300 text-2xl" : "text-amber-50 text-2xl"}
      >
        Contact
      </Link>
    </nav>
  );
}

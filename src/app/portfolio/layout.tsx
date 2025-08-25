"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      <nav className="h-[80px] w-[650px] ml-32 mt-8 flex flex-row items-center justify-center space-x-12 px-8">
        <Link
          href="/portfolio/uiux"
          className={
            pathname.includes("/portfolio/uiux")
              ? "text-[#252525] bg-lime-300 rounded-2xl p-4 text-2xl"
              : "text-amber-50 text-2xl border-1 border-amber-50 rounded-2xl p-4"
          }
        >
          UI/UX Projects
        </Link>
        <Link
          href="/portfolio/webdev"
          className={
            pathname === "/portfolio/webdev"
              ? "text-[#252525] bg-lime-300 rounded-2xl p-4 text-2xl"
              : "text-amber-50 text-2xl border-1 border-amber-50 rounded-2xl p-4"
          }
        >
          Web Dev Projects
        </Link>
      </nav>
      {children}
    </div>
  );
}

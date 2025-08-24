import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Oussama Benhebbadj",
  description: "Portfolio of Oussama Benhebbadj",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

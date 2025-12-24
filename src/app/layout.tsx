import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../app/components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Game Changer - Career Opportunities & Events",
  description: "Level up your career, win big in events, and unlock global opportunities with Game Changer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

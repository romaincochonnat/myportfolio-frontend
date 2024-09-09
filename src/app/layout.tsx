import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Romain Cochonnat - Software Engineer, Front-end and App Developer",
  description:
    "Romain Cochonnat's Portfolio as Software Engineer with severals sections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-screen min-h-screen bg-bg flex flex-col items-center`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
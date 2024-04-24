import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/_components/Header";
import { headerData } from "../constants/headerData";
import Footer from "~/_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "burke",
  description: "burke taylor's personal site",
  icons: [
    {
      rel: "icon",
      url: "https://utfs.io/f/c263448d-067a-4604-998d-162cf09c57f3-q13inh.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <body
        className={`font-sans ${inter.variable} flex min-h-screen flex-col`}
      >
        <div className="dither-bg absolute isolate h-full w-full"></div>
        <Header {...headerData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

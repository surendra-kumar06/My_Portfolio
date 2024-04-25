import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Surendra Kumar",
  description: "Surendra kumar Portfolio - About, Skills, Contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-r from-purple-600 to-purple-900`}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/todoList/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-300 my-0 mx-auto max-w-2xl">
        <Header />
        {children}
      </body>
    </html>
  );
}

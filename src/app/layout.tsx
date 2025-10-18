import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Aside from "@/components/Aside";

export const metadata: Metadata = {
  title: "Code Connect",
  description:
    "Code Connect is a platform for connecting developers with each other.",
};

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={prompt.className}>
      <body>
        <div className="app-container">
          <div>
            <Aside />
          </div>
          <div className="main-content">{children}</div>
        </div>
      </body>
    </html>
  );
}

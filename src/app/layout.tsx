import type { Metadata } from "next";
import "./globals.css";
import Aside from "@/components/Aside";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Code Connect is a platform for connecting developers with each other.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
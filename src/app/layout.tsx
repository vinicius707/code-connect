import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
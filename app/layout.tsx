import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Auth Secret Generator",
  description: "Create cryptographically secure secrets for authentication and API keys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

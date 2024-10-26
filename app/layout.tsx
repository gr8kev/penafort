// app/layout.tsx
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import Header from "./components/modules/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

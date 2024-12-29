"use client";

import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import Footer from "@/components/Footer";
import BootstrapJS from "@/components/BootstrapJS";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { AuthProvider } from "@/components/authContext";

const Opensans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Penafort Winery</title>
        <meta
          name="description"
          content="As one of the biggest wine companies in the world, it is our responsibility to make sure our growth is sustainable to our people."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Penafort Winery" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Penafort Winery | Fine Wines" />
        <meta
          property="og:description"
          content="As one of the biggest wine companies in the world, it is our responsibility to make sure our growth is sustainable to our people."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://penafortwinery.com" />

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Penafort Winery" />
        <meta
          name="twitter:description"
          content="Fine wines and sustainable growth."
        />
        <meta name="twitter:image" content="/images/logo.png" />

        {/* SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Penafort Winery, wine, sustainable wine production, fine wines, premium wines, vineyard, wine tasting, eco-friendly wines, award-winning wines"
        />

        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>

      <body>
        <AuthProvider>
          <main className={Opensans.className}>
            <Header />
            {children}
            <Footer />
            <BootstrapJS />
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

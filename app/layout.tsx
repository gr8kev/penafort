"use client";

import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import Footer from "@/components/Footer";
import BootstrapJS from "@/components/BootstrapJS";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/Header";

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
        <title>PenafortWinery</title>
        <meta
          name="description"
          content="As one of the biggest wine companies in the world, it is our responsibility to make sure our growth is sustainable to our people."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PenafortWinery" />

        {/* Open Graph meta tags for social media sharing */}
        <meta
          property="og:title"
          content="Penafort Winery, wine, sustainable wine production, fine wines, premium "
        />
        <meta
          property="og:description"
          content="As one of the biggest wine companies in the world, it is our responsibility to make sure our growth is sustainable to our people."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://penafortwinery.com" />

        {/* Twitter card meta tags  */}
        <meta
          name="twitter:card"
          content="Penafort Winery, wine, sustainable wine production, fine wines, premium "
        />

        {/* <!-- SEO meta tags for search engines --> */}
        <meta name="robots" content="index, follow" />

        {/* <!-- Meta keywords tag --> */}
        <meta
          name="keywords"
          content="Penafort Winery, wine, sustainable wine production, fine wines, premium wines, wine company, vineyard, wine tasting, eco-friendly wines, award-winning wines"
        />

        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>

      <body>
        <main className={Opensans.className}>
          <Header />
          {children}
          <Footer />
          <BootstrapJS />
        </main>
      </body>
    </html>
  );
}

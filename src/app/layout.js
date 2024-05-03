import { Inter, Pixelify_Sans, Montserrat, Orbitron } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers";

// Import Styles
import "./globals.css";
import "./app.scss";
import "../../public/fonts/index.css";

const pixelify = Pixelify_Sans({
  family: ["Pixelify Sans"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  family: ["Montserrat"],
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  family: ["Orbitron"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MinerLab",
  favicon: "/favicon.ico",
  description: "MinerLab is a platform for mining cryptocurrencies.",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${orbitron.className}`} lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.favicon} />
        <meta name="description" content={metadata.description} />
        {/* og tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minerlab.io" />
        <meta property="og:image" content="/favicon.ico" />
        {/* twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@minerlab" />
        <meta name="twitter:creator" content="@minerlab" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/favicon.ico" />
      </head>
      <Providers>
        <body className={`bg-gray-950`}>
          <Header />
          {children}
          {/* <Footer /> */}
        </body>
      </Providers>
    </html>
  );
}

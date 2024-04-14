import "../styles/globals.css";
import localFont from 'next/font/local';
import { Cantarell } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const cantarell = Cantarell({
    variable: '--cantarell',
    weight: ['400', '700'],
    subsets: ['latin']
})

const cmuRoman = localFont({src: [{path: '../public/font/cmunrm.ttf', weight: '400'}], variable: '--cmu-roman'});

export const metadata = {
    title: "PWA with Next 13",
    description: "PWA application with Next 13",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
    themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
    authors: [
      { name: "Rajesh Prajapati" },
      {
        name: "Rajesh Prajapati",
        url: "",
      },
    ],
    viewport:
      "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
  };

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <Component className={cantarell.className} {...pageProps} />
        <Analytics/>
        </>
    );
}
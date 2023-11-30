import "../styles/globals.css";
import localFont from 'next/font/local';
import { Cantarell } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const cantarell = Cantarell({
    variable: '--cantarell',
    weight: ['400', '700'],
    subsets: ['latin']
})

const cmuRoman = localFont({src: '../public/font/cmunrm.ttf', variable: '--cmu-roman'});

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <Component className={cantarell.className} {...pageProps} />
        <Analytics/>
        </>
    );
}
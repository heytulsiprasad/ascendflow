import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AscendFlow - AI Solutions for Home Improvement",
  description:
    "Premier AI automation solutions for the home improvement sector",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PNP7JJSZ3T"
        />
        <Script id="G-PNP7JJSZ3T">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PNP7JJSZ3T', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Premier AI automation solutions for the home improvement sector"
        />
        <meta
          name="keywords"
          content="AI, automation, home improvement, business solutions, AscendFlow"
        />
        <meta name="author" content="AscendFlow" />
        <meta
          property="og:title"
          content="AscendFlow - AI Solutions for Home Improvement"
        />
        <meta
          property="og:description"
          content="Premier AI automation solutions for the home improvement sector"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ascendflowhq.com" />
        <meta
          property="og:image"
          content="https://www.ascendflowhq.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AscendFlow - AI Solutions for Home Improvement"
        />
        <meta
          name="twitter:description"
          content="Premier AI automation solutions for the home improvement sector"
        />
        <meta
          name="twitter:image"
          content="https://www.ascendflowhq.com/og-image.png"
        />
        <title>AscendFlow - AI Solutions for Home Improvement</title>
        <link rel="icon" href="/ascendflow-favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://www.ascendflowhq.com" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-black">
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgb(255_0_153/0.1)_0deg,rgb(120_0_255/0.1)_120deg,rgb(0_255_255/0.1)_240deg)]" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

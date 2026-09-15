import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/Footer";
import { BackgroundTypography } from "@/components/layout/BackgroundTypography";
import RunningCat from "@/components/ui/Oneko";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rohan.schedulers.app"),
  title: {
    default: "Rohan Vernekar | Software Engineer",
    template: "%s | Rohan Vernekar",
  },
  description:
    "Rohan Vernekar is a software engineer who builds useful products and experiments with AI.",
  verification: {
    google: "14XXF0GDwUH4gemyOudOkdHdYBlorp12bZcjsQ1dgRE",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Rohan Vernekar",
    title: "Rohan Vernekar | Software Engineer",
    description:
      "Software engineer building useful products and experimenting with AI.",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Rohan Vernekar — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rohanvrnkr",
    creator: "@Rohanvrnkr",
    title: "Rohan Vernekar | Software Engineer",
    description:
      "Software engineer building useful products and experimenting with AI.",
    images: ["/social-preview.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-2562933140972204",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2562933140972204"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`bg-grid-lines ${inter.className} antialiased min-h-screen `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RunningCat startPos={{ x: 380, y: 250 }} />
          <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
            <BackgroundTypography />

            <main className="relative z-10 flex-1">
              {children}
            </main>
            <div className="relative z-10">
              <Footer />
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

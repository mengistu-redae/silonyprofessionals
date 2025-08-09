import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Silony - Professional IT Services PLC",
  description:
    "Where Enterprise Systems Meet Expert Services. Silony Professional IT Services PLC offers cutting-edge solutions in deployment, consultancy, and training for IT infrastructure.",
  keywords:
    "IT services, enterprise systems, expert services, deployment, implementation, consultancy, IT infrastructure, training, Ethiopia, technology, solutions",
  openGraph: {
    title: "Silony - Professional IT Services PLC",
    description: "Where Enterprise Systems Meet Expert Services",
    url: "https://silony.com",
    siteName: "Silony Professional IT Services PLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silony Professional IT Services PLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silony - Professional IT Services PLC",
    description: "Where Enterprise Systems Meet Expert Services",
    images: ["/og-image.jpg"],
  },
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollManager } from "@/components/scroll-manager"
import { CookieBanner } from "@/components/cookie-banner"
import { CookieSettingsModal } from "@/components/cookie-settings-modal"
import { ScriptLoader } from "@/components/script-loader"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zero-Cost Directory | Free Developer Tools",
  description:
    "A trusted reference library helping students and builders discover developer tools that are genuinely free forever.",
  generator: "S&T Web Works",
  icons: {
    icon: [
      {
        url: "/icon-dark-32x32.png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ScrollManager />
        <ScriptLoader />
        <Header />
        <div className="page-transition">{children}</div>
        <Footer />
        <CookieBanner />
        <CookieSettingsModal />
        <Analytics />
      </body>
    </html>
  )
}

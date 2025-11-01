import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Lucentix Jewels - Luxury Jewelry & Bespoke Design",
  description:
    "Discover timeless luxury jewelry and custom bespoke designs. Transform heirlooms and create pieces that tell your story.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cormorant.variable} font-cormorant bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}

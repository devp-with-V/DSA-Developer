import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DSA Learning Platform",
  description: "Step by step guide for learning Data Structures and Algorithms",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-slate-900 text-white">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'
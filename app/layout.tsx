import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AscendFlow - AI Solutions for Home Improvement",
  description: "Premier AI automation solutions for the home improvement sector",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
  )
}


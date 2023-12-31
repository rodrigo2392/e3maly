import './globals.css'
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'

const inter = Dosis({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

  const FigFont = Figtree({
    display: "swap",
    subsets:["latin"],
    weight:["400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
  })

export const metadata: Metadata = {
  title: 'MySpotify',
  description: 'A Spotify-clone made with Typescript, Nextjs, and PandaCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={FigFont.className}>{children}</body>
    </html>
  )
}

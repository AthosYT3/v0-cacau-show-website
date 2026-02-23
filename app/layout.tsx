import type { Metadata, Viewport } from 'next'
import { Lora, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const _openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Cacau Show | A maior Pascoa do Brasil',
  description: 'Cacau Show - Chocolates finos, trufas, tabletes, bombons e presentes especiais. Descubra o mundo Cacau Show.',
}

export const viewport: Viewport = {
  themeColor: '#5c3a21',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_lora.variable} ${_openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

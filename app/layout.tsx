import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'Sahukar Group ? All Problem, One Solution',
  description: 'Official website of Sahukar Group. All Problem, One Solution ? Sahukar Group. Connect Me. Indore, MP, India.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Sahukar Group',
    description: 'All Problem, One Solution ? Sahukar Group. Connect Me.',
    url: 'https://agentic-c1bfb29e.vercel.app',
    siteName: 'Sahukar Group',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sahukar Group ? Black & Silver Royal Corporate Theme',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-carbon bg-mesh-dark bg-silver-sheen min-h-screen antialiased`}>{children}</body>
    </html>
  )
}

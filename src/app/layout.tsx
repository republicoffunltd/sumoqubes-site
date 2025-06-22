import type { Metadata } from 'next'
import './globals.css'
import './custom-styles.css'

import Script from 'next/script'

export const metadata: Metadata = {
  title: 'SumoQubes',
  description: 'SMASH & BASH IN THIS QUBIC CLASH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Porkys&display=swap" />
      </head>
      <body>
        {children}
        <Script src="/custom-scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
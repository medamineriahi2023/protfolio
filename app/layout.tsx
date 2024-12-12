import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const poppins = Poppins({ 
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my professional portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">My Portfolio</h1>
                <div className="flex-grow"></div>
                <ModeToggle />
              </div>
            </header>
            <main className="flex-grow container mx-auto mt-8 px-4 pb-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import Navbar from '@/components/ui/Navbar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import {Inter} from "next/font/google"
export const metadata = {
  title: 'FeedIt',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      lang="en"
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
    >
      <div>
        <Navbar />
        <body className="min-h-screen pt-12 bg-slate-50 antialiased">
          <div className="container max-w-7xl mx-auto pt-12 h-full">{children}</div>
        </body>
      </div>
    </div>
  );
}

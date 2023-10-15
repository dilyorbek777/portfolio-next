import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'


const fira_code = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Dilyorbek Asfandiyorov',
  description: 'Portfolio of Dilyorbek Asfandiyorov. My full name is Dilyorbek Asfandiyorov with 2 year experience And with one year experience of online working and freelancing I participated in 20+ real and large projects. And I worked on 150+ real projects and telegram bots.',
  keywords: "Dilyorbek, Asfandiyorov, Portfolio, Dilyorbek Asfandiyorov, online working, freelancing, 20+ real and large projects,  telegram bots.",
  creator: "Asfandiyorov Dilyorbek",
  publisher: "Asfandiyorov Dilyorbek",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira_code.className}>

        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={7}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px sky-blue,0 0 5px #2299DD" />
        <Navbar />
        <main>
          {children}
        </main>

      </body>
    </html>
  )
}



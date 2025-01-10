import {Header, Banner, Footer} from '@/components'
import {About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World} from '../../sections'
import '../globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <div className="relative">
          <div className="footer-gradient" />
          <Footer />
        </div>
      </body>
    </html>
  )
}

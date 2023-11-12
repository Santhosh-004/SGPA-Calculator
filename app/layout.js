import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SRM SGPA Calculator',
  description: 'Calculate your SPGA fast now',
  keywords: 'srm sgpa calculator, srm, sgpa, calculator, university, gpa',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

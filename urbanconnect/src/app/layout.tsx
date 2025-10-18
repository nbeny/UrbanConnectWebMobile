import "./globals.css";
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})

export const metadata = {
  title: "UrbanConnect - Welcome",
  description: "Your City, Connected.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}

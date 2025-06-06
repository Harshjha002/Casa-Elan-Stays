import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css"
import { Josefin_Sans } from "next/font/google"


const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
})



export const metadata = {
  title: {
    template: "%s | Casa Elan",
    default: "Welcome | Casa Elan"
  },
  description: "Experience the epitome of luxury at Casa Elan — a collection of elegant cabin hotels nestled in breathtaking mountains and enchanting forests across the globe."
}


export default function RootLayout({ children }) {
  return <html lang="en">
    <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative `}>
      <Header />
      <div className="flex-1 px-8 py-12 grid">
        <main className="max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </body>

  </html>
}
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";



export const metadata = {
  title: "Casa Elan",
}



export default function RootLayout({ children }) {
  return <html lang="en">
    <body>
      <header>
        <Logo />
      </header>
      <Navigation />
      <main>
        {children}
      </main>
    </body>

  </html>
}
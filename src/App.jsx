import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LiveChat from './components/LiveChat'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import Stats from './sections/Stats'
import FAQSection from './sections/FAQSection'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <ThemeProvider>
      <Loader done={!loading} />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Stats />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <LiveChat />
    </ThemeProvider>
  )
}

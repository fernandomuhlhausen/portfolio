import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Games from './components/Games'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top">
        <Header />
        <main className="pt-16">
          <Hero />
          <Games />
          <About />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

import Header from './components/Header'
import Hero from './components/Hero'
import Games from './components/Games'
import About from './components/About'
import Resume from './components/Resume'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top">
      <Header />
      <main className="pt-16">
        <Hero />
        <Games />
        <About />
        <Resume />
      </main>
      <Footer />
    </div>
  )
}

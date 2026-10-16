import Header from './components/Header'
import Games from './components/Games'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top">
      <Header />
      <main className="pt-16">
        <h1 className="mx-auto w-full max-w-5xl px-5 text-4xl font-bold">
          Fernando Muhlhausen
        </h1>
        <Games />
      </main>
      <Footer />
    </div>
  )
}

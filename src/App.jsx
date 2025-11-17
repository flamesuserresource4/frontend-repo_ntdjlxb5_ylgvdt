import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar/>
      <main>
        <Hero/>
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[0.3em] text-xs text-sky-700/80">About</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">A quiet corner of Japan in Saigon</h2>
            <p className="mt-4 text-gray-600">Inspired by traditional machiya houses, our space blends natural wood, paper, and stone with modern comfort. Share stories in the lounge, sip tea in the afternoon light, and step into the city when you’re ready.</p>
          </div>
        </section>
        <Rooms/>
        <Amenities/>
        <Gallery/>
        <Location/>
        <Contact/>
      </main>
      <footer className="border-t border-gray-200 py-10 text-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} aoiinn · Saigon</p>
      </footer>
    </div>
  )
}

export default App

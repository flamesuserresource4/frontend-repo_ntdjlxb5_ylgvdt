import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 grid place-items-center text-white font-semibold shadow">
            青
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900 tracking-wide">aoiinn</p>
            <p className="text-xs text-gray-500 -mt-0.5">Saigon</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo("about")} className="hover:text-sky-700 text-gray-700 transition">About</button>
          <button onClick={() => scrollTo("rooms")} className="hover:text-sky-700 text-gray-700 transition">Rooms</button>
          <button onClick={() => scrollTo("amenities")} className="hover:text-sky-700 text-gray-700 transition">Amenities</button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-sky-700 text-gray-700 transition">Gallery</button>
          <button onClick={() => scrollTo("location")} className="hover:text-sky-700 text-gray-700 transition">Location</button>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact")}} className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-700 text-white font-medium shadow-sm hover:shadow-md transition">Book now</a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white/90">
          <div className="px-4 py-3 space-y-2 text-sm">
            {[
              ["About","about"],
              ["Rooms","rooms"],
              ["Amenities","amenities"],
              ["Gallery","gallery"],
              ["Location","location"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left py-2 text-gray-700 hover:text-sky-700">
                {label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="w-full mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-700 text-white font-medium">
              Book now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

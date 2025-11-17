import { MapPin } from "lucide-react";

export default function Location(){
  return (
    <section id="location" className="py-20 bg-sky-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-sky-700/80">Location</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">In the heart of Saigon</h2>
            <p className="mt-4 text-gray-600">We are steps from vibrant cafes, late‑night food, and historic streets. Easy access to District 1 and the airport.</p>
            <div className="mt-6 flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-sky-700"/>
              <span>123 Nguyen Van Binh, District 1, Ho Chi Minh City</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-sm">
            <iframe title="map" className="w-full h-[320px]" src="https://www.openstreetmap.org/export/embed.html?bbox=106.690%2C10.775%2C106.705%2C10.785&layer=mapnik"/>
          </div>
        </div>
      </div>
    </section>
  );
}
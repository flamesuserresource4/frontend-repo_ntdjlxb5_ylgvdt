import { Wifi, Coffee, ShowerHead, Lock, Leaf, MapPin } from "lucide-react";

const items = [
  { icon: Wifi, title: "Fast Wi‑Fi", text: "Reliable fiber internet throughout" },
  { icon: Coffee, title: "Tea & Coffee", text: "Complimentary bar in the lounge" },
  { icon: ShowerHead, title: "Rain Showers", text: "Clean, modern shared bathrooms" },
  { icon: Lock, title: "Secure", text: "Lockers and 24/7 reception" },
  { icon: Leaf, title: "Quiet Corners", text: "Reading nooks and mini zen garden" },
  { icon: MapPin, title: "Central District", text: "Walkable to cafes and sights" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-sky-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs text-sky-700/80">Amenities</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Everything you need</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Simple comforts with a Japanese sensibility—light, space, and ease.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,text}) => (
            <div key={title} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 grid place-items-center">
                <Icon className="w-5 h-5"/>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

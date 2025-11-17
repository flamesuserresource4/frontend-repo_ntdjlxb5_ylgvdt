export default function Rooms() {
  const rooms = [
    {
      name: "Tatami Dorm",
      desc: "Comfortable capsule-style bunks with soft lighting and privacy curtains.",
      price: 9,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop",
    },
    {
      name: "Zen Double",
      desc: "Minimal double room with shoji-inspired accents and city views.",
      price: 28,
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1800&auto=format&fit=crop",
    },
    {
      name: "Tea Suite",
      desc: "Spacious suite with a tea corner and private balcony.",
      price: 45,
      img: "https://images.unsplash.com/photo-1505692794403-34d4982ae63c?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs text-sky-700/80">Rooms</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Find your calm</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Thoughtfully designed spaces with natural wood, soft textures, and gentle light.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <div key={r.name} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{r.name}</h3>
                  <span className="text-sky-700 font-medium">${r.price}<span className="text-gray-500 text-sm">/night</span></span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{r.desc}</p>
                <a href="#contact" className="inline-block mt-4 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Book</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

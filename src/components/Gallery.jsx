export default function Gallery(){
  const photos = [
    "https://images.unsplash.com/photo-1523419409543-a9e0950e1ca4?q=80&w=1880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521401292936-0a2129a30b22?q=80&w=1880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579733931410-434fd9d7c7d7?q=80&w=1880&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1880&auto=format&fit=crop",
  ];
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs text-sky-700/80">Gallery</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">A glimpse inside</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src,i)=> (
            <div key={i} className={`overflow-hidden rounded-xl border ${i%3===0? 'md:col-span-2':''}`}>
              <img src={src} alt="aoiinn" className="w-full h-full object-cover hover:scale-[1.03] transition"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
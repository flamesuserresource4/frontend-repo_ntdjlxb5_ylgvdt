import { useState } from "react";

export default function Contact(){
  const [status,setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setStatus("loading");
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if(!res.ok) throw new Error("Failed");
      setStatus("success");
      e.currentTarget.reset();
    }catch(err){
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="uppercase tracking-[0.3em] text-xs text-sky-700/80">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Book your stay</h2>
          <p className="mt-4 text-gray-600">Tell us your dates and room preference. We'll get back within a few hours.</p>
        </div>

        <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200"/>
          <input name="email" type="email" placeholder="Email" required className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200"/>
          <input name="dates" placeholder="Dates" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200 sm:col-span-2"/>
          <select name="room" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200">
            <option value="Tatami Dorm">Tatami Dorm</option>
            <option value="Zen Double">Zen Double</option>
            <option value="Tea Suite">Tea Suite</option>
          </select>
          <textarea name="message" placeholder="Message" rows="4" className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-200 sm:col-span-2"/>
          <button disabled={status==='loading'} className="sm:col-span-2 mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-indigo-700 text-white font-medium">
            {status==='loading' ? 'Sending…' : 'Send request'}
          </button>
          {status==='success' && <p className="sm:col-span-2 text-green-600">Thanks! We will reach out soon.</p>}
          {status==='error' && <p className="sm:col-span-2 text-red-600">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
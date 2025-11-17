import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-rose-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl"/>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl"/>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="uppercase tracking-[0.35em] text-xs text-sky-700/80">
          a japanese-inspired hostel in saigon
        </motion.p>
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900">
          aoiinn
        </motion.h1>
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Calm minimal design, warm communal spaces, and thoughtful details inspired by Kyoto machiya—right in the heart of Ho Chi Minh City.
        </motion.p>
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className="mt-8 flex items-center justify-center gap-4">
          <a href="#rooms" className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            Explore rooms
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium border border-gray-200 hover:border-gray-300 shadow-sm">
            Book a stay
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white to-transparent"/>
    </section>
  );
}

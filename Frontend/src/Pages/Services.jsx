import { Wand2, Scissors, Sparkles, SprayCan, Gem, CalendarCheck2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Haircut",
    icon: <Scissors className="w-6 h-6 text-yellow-300" />,
    image: "/images/haircut.jpg",
    description: "Sharp, stylish haircuts tailored to your personality.",
  },
  {
    title: "Fades",
    icon: <Sparkles className="w-6 h-6 text-yellow-300" />,
    image: "/images/fades.jpg",
    description: "Clean fades with perfect blend and detail work.",
  },
  {
    title: "Facial",
    icon: <Wand2 className="w-6 h-6 text-yellow-300" />,
    image: "/images/facial.jpg",
    description: "Rejuvenating facials for clear and fresh skin.",
  },
  {
    title: "D-Tan",
    icon: <SprayCan className="w-6 h-6 text-yellow-300" />,
    image: "/images/dtan.jpg",
    description: "Brighten your skin tone and remove tanning.",
  },
  {
    title: "Perms",
    icon: <Wand2 className="w-6 h-6 text-yellow-300" />,
    image: "/images/perm.jpg",
    description: "Get beautiful curls and volume with safe perms.",
  },
  {
    title: "Rebonding",
    icon: <Gem className="w-6 h-6 text-yellow-300" />,
    image: "/images/rebon.jpg",
    description: "Straight and smooth hair with professional rebonding.",
  },
  {
    title: "Smoothing",
    icon: <Gem className="w-6 h-6 text-yellow-300" />,
    image: "/images/smmoth.jpg",
    description: "Say goodbye to frizz and hello to silky smooth hair.",
  },
  {
    title: "Piercing",
    icon: <Gem className="w-6 h-6 text-yellow-300" />,
    image: "/images/ps.jpg",
    description: "Safe, hygienic and stylish piercings by professionals.",
  },
  {
    title: "Beard",
    icon: <Gem className="w-6 h-6 text-yellow-300" />,
    image: "/images/beard.jpg",
    description: "Safe, hygienic and stylish styling of beard by professionals.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-gradient-to-b from-indigo-900 via-gray-800 to-black text-white p-6 md:min-h-screen sticky top-0 shadow-2xl rounded-b-3xl md:rounded-none">
        <h2 className="text-3xl font-extrabold mb-8 text-yellow-400 tracking-wide text-center md:text-left">
          Our Services
        </h2>
        <ul className="space-y-4">
          {services.map((service, i) => (
            <li
              key={i}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-400/10 transition"
            >
              {service.icon}
              <span>{service.title}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Service Cards */}
      <main className="flex-1 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/10 border border-zinc-600 backdrop-blur-md text-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="h-52 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5 space-y-3 flex flex-col justify-between flex-1">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-yellow-300">
                {service.icon} {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>

              {/* 🚀 Book Now Button with Icon */}
              <Link
                to={`/book?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-center gap-2 mt-auto bg-yellow-400 text-black font-bold px-4 py-2 rounded-full hover:bg-yellow-300 transition shadow"
              >
                <CalendarCheck2 size={18} /> Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

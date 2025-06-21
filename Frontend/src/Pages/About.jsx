import { Scissors, Users, Smile, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#e3e6e8] text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3992872/pexels-photo-3992872.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Barber Shop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md"
          >
            The Fades & Cuts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl mt-4 max-w-xl text-gray-300"
          >
            Premium grooming where sharpness meets style.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 text-center text-gray-900"
        >
          Why Choose The Fades & Cuts
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="bg-white/50 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-indigo-600 mb-4">{icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gradient-to-br from-[#eaecee] via-white to-[#fdfdfd] py-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2025, The Fades & Cuts began as a single chair in a modest corner shop.
            Today, we are a hub of artistry and precision, blending tradition with trend.
            Every style is crafted with care, every visit—an experience.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map(({ number, label, color }, i) => (
            <motion.div
              key={i}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-4xl font-extrabold ${color}`}>{number}</h3>
              <p className="text-sm text-gray-600">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Features with Icons
const features = [
  {
    icon: <Scissors />,
    title: "Precision Fades",
    desc: "Trained barbers delivering crisp, flawless finishes.",
  },
  {
    icon: <Smile />,
    title: "Vibe & Comfort",
    desc: "Chill ambiance with music, lighting, and espresso.",
  },
  {
    icon: <Users />,
    title: "Built on Trust",
    desc: "Our loyal clients are a reflection of our craft.",
  },
  {
    icon: <Star />,
    title: "Top Rated",
    desc: "4.9★ on Google — your satisfaction is guaranteed.",
  },
];

// Stats Section
const stats = [
  { number: "10+", label: "Years of Style", color: "text-indigo-600" },
  { number: "5K+", label: "Clients Styled", color: "text-yellow-500" },
  { number: "4.9★", label: "Google Rating", color: "text-green-600" },
  { number: "100%", label: "Client Satisfaction", color: "text-pink-600" },
];

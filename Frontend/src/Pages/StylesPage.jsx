import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const styles = [
  {
    name: "Classic Taper",
    image: "/images/classicimg1.jpg",
    description: "A timeless cut with neatly tapered sides and a clean neckline. Ideal for a refined and elegant look.",
  },
  {
    name: "Low Fade",
    image: "/images/low fade.jpg",
    description: "Smooth low fades that blend cleanly into the beard or skin. Subtle yet sharp.",
  },
  {
    name: "Textured Crop",
    image: "/images/tc.jpg",
    description: "Modern messy crops with texture on top and clean faded sides. Popular among trendsetters.",
  },
  {
    name: "Beard",
    image: "/images/beard.jpg",
    description: "Bold and voluminous, styled upwards with a glossy finish. Great for formal looks.",
  },
  {
    name: "Buzz Cut",
    image: "/images/buzz.jpg",
    description: "Minimalist and clean. Easy to maintain and always sharp.",
  },
  {
    name: "Curly High Top",
    image: "/images/perms.jpg",
    description: "A celebration of curls, shaped and styled with volume on top. Expressive and bold.",
  },
];

export default function StylesPage() {
  const navigate = useNavigate();

  const handleBooking = (styleName) => {
    const query = new URLSearchParams({ service: styleName });
    navigate(`/book?${query.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-16"
        >
          Signature Styles
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((style, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg border border-zinc-700 rounded-xl ring-1 ring-yellow-500/20 overflow-hidden shadow-2xl hover:shadow-yellow-400/40 transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-2">{style.name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{style.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleBooking(style.name)}
                  className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-medium rounded-lg shadow"
                >
                  Book This Style
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

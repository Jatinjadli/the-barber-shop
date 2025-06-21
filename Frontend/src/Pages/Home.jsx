import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Sparkles, ShoppingBag, LogIn, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      aria-label="Barber shop hero section"
    >
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
        role="img"
        aria-label="Barber shop background"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* ✅ Top Login/Signup Strip */}
      <div className="absolute top-0 w-full z-20 bg-black/50 backdrop-blur-sm py-2 px-6 flex justify-end items-center gap-4 text-sm text-white font-medium">
        <Link
          to="/login"
          className="flex items-center gap-1 hover:underline hover:text-indigo-300"
        >
          <LogIn size={16} /> Login
        </Link>
        <span className="text-white/50">|</span>
        <Link
          to="/signup"
          className="flex items-center gap-1 hover:underline hover:text-indigo-300"
        >
          <UserPlus size={16} /> Sign Up
        </Link>
      </div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 sm:px-10 lg:px-20 text-white flex flex-col justify-center">
        <div className="mb-6 max-w-2xl mt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            The Fades & Cuts
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Your premier destination for sharp styles, clean fades, and a fresh look — tailored exclusively for the modern gentleman.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap mb-6">
          <Link
            to="/book"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            <Scissors size={18} /> Book Appointment
          </Link>
          <Link
            to="/styles"
            className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition"
          >
            View Styles <ArrowRight size={18} />
          </Link>
          <Link
            to="/products"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            <ShoppingBag size={18} /> Shop Now
          </Link>
        </div>

        {/* Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl sm:max-w-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl shadow-xl text-sm sm:text-base font-medium flex items-center gap-3 animate-pulse"
          role="note"
        >
          <Sparkles className="text-white" size={20} />
          <span className="font-semibold leading-tight">
            💈 Summer Special: 20% OFF on Facials & D-Tan – This Week Only!
          </span>
        </motion.div>
      </div>
    </section>
  );
}

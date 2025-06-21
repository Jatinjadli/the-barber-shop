// src/components/OfferBanner.jsx
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function OfferBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg mb-6 text-sm font-medium flex items-center gap-3"
    >
      <Sparkles className="text-white" />
      <span className="text-sm sm:text-base">
        <strong>🔥 Summer Special:</strong> Get <strong>20% OFF</strong> on all facials & D-Tan services this week!
      </span>
    </motion.div>
  );
}

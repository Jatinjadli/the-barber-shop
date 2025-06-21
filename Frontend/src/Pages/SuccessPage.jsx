import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-indigo-100 px-6"
      style={{
        backgroundImage: "url(https://www.transparenttextures.com/patterns/paper-fibers.png)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full"
      >
        <CheckCircle
          size={80}
          className="text-green-600 mb-4 mx-auto animate-bounce drop-shadow"
        />
        <h1 className="text-3xl font-extrabold text-indigo-800 mb-3">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for your purchase. Your order has been placed successfully and will be delivered
          shortly.
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Go to Home Page
        </motion.button>
      </motion.div>
    </div>
  );
}

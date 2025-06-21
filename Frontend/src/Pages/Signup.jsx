import { Mail, Lock, UserPlus, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border"
      >
        <div className="mb-8">
          <UserPlus className="mx-auto text-indigo-600" size={42} />
          <h1 className="text-3xl font-extrabold mt-2">Join The Fades & Cuts</h1>
          <p className="text-sm text-gray-500">Create your new account now</p>
        </div>

        <form className="space-y-6" onSubmit={handleSignup}>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              required
              className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition shadow"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          Already have an account?
          <button
            onClick={() => navigate("/login")}
            className="text-indigo-600 hover:underline ml-1"
          >
            Login
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-3xl text-gray-600">
          <FaInstagram className="hover:text-pink-500" />
          <FaWhatsapp className="hover:text-green-500" />
          <FaSnapchatGhost className="hover:text-yellow-400" />
        </div>
      </motion.div>
    </div>
  );
}

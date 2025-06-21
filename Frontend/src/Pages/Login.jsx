import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/home");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    if (email === "client@fadescuts.com" && password === "123456") {
      setErrorMsg("");
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border"
      >
        <div className="mb-8">
          <LogIn className="mx-auto text-indigo-600" size={42} />
          <h1 className="text-3xl font-extrabold mt-2">Welcome Back</h1>
          <p className="text-sm text-gray-500">Login to The Fades & Cuts</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="text-right text-sm text-indigo-600 hover:underline cursor-pointer">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition shadow"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm">
          Don’t have an account?
          <Link to="/signup" className="text-indigo-600 hover:underline ml-1">
            Sign up
          </Link>
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

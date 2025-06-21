import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  User,
  Phone,
  Home,
  ArrowRightCircle,
  ArrowLeftCircle,
  Landmark,
  Building2,
} from "lucide-react";

export default function AddressPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    const { name, address, city, state, pincode, mobile } = form;

    if (!name || !address || !city || !state || !pincode || !mobile) {
      setError("Please fill in all the required fields.");
      setTimeout(() => setError(""), 2500);
      return;
    }

    localStorage.setItem("userAddress", JSON.stringify(form));
    navigate("/payment");
  };

  return (
    <div
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200 p-10 rounded-2xl shadow-xl relative"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/cart")}
          className="absolute top-4 left-4 text-sm text-indigo-600 font-semibold flex items-center gap-1 hover:underline"
        >
          <ArrowLeftCircle size={18} />
          Back to Cart
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <Home className="mx-auto text-indigo-600 mb-2" size={36} />
          <h1 className="text-3xl font-bold text-indigo-800">Shipping Details</h1>
          <p className="text-gray-600 mt-1">Please enter your delivery address below</p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
              <User size={18} /> Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Name"
              className={`w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 outline-none ${
                error && !form.name
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
              <Phone size={18} /> Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 outline-none ${
                error && !form.mobile
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
              <MapPin size={18} /> Full Address
            </label>
            <textarea
              name="address"
              placeholder="Flat No, Street, Area, Landmark..."
              rows="4"
              className={`w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 outline-none ${
                error && !form.address
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
              <Building2 size={18} /> City
            </label>
            <input
              type="text"
              name="city"
              placeholder="e.g. City"
              className={`w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 outline-none ${
                error && !form.city
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
              value={form.city}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-1">
              <Landmark size={18} /> State
            </label>
            <input
              type="text"
              name="state"
              placeholder="e.g. State"
              className={`w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 outline-none ${
                error && !form.state
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
              value={form.state}
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-gray-700 font-semibold mb-1 block">Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="6-digit area code"
              maxLength={6}
              className={`w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 outline-none ${
                error && !form.pincode
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-indigo-400"
              }`}
              value={form.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm font-medium bg-red-100 px-4 py-2 rounded mt-6 text-center">
            {error}
          </div>
        )}

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleContinue}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition"
        >
          Continue to Payment <ArrowRightCircle size={20} />
        </motion.button>
      </motion.div>
    </div>
  );
}

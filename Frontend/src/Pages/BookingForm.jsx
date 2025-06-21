import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck2, Clock, Home } from "lucide-react";
import OfferBanner from "../Components/OfferBanner";

export default function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const preSelectedService = query.get("service");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [bookingDone, setBookingDone] = useState(false);

  const openingHour = 10;
  const closingHour = 22;

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hour = parseInt(formData.time.split(":")[0]);
    if (hour < openingHour || hour >= closingHour) {
      toast.error("Booking must be between 10:00 AM and 10:00 PM.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          contact: formData.phone,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setBookingDone(true);
        toast.success("Appointment booked successfully!");
        setFormData({ name: "", phone: "", service: "", date: "", time: "" });

        // Redirect to home after 4 seconds
        setTimeout(() => {
          setBookingDone(false);
          navigate("/");
        }, 4000);
      } else {
        toast.error("Booking failed. Try again!");
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 flex items-center justify-center px-4 relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Floating Brand Badge */}
      <div className="absolute top-6 left-6 bg-black text-white px-4 py-1 rounded-full text-xs tracking-wider font-semibold shadow-lg">
        ✂ The Fades & Cuts
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-xl"
      >
        {/* Back to Home Button */}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="absolute -top-16 right-0 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg transition"
        >
          <Home size={18} /> Home
        </motion.button>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-xl border border-gray-300 shadow-2xl p-10 rounded-3xl w-full space-y-6"
        >
          <OfferBanner />

          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold text-gray-800 mb-1"
            >
              Book Your Look
            </motion.h2>
            <p className="text-sm text-gray-500">
              <Clock size={16} className="inline-block mr-1 mb-1" />
              Shop Open: <strong>10:00 AM – 10:00 PM</strong> (Mon–Sun)
            </p>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />
            <div>
              <label className="text-sm text-gray-600">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
              >
                <option value="">Select Service</option>
                <option>Haircut</option>
                <option>Fades</option>
                <option>Facial</option>
                <option>D-Tan</option>
                <option>Perms</option>
                <option>Rebonding</option>
                <option>Smoothing</option>
                <option>Piercing</option>
              </select>
            </div>
            <InputField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
            <InputField
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <CalendarCheck2 size={20} />
            Book Now
          </motion.button>
        </motion.form>

        {/* ✅ Fancy Success Popup */}
        <AnimatePresence>
          {bookingDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center rounded-3xl"
            >
              <motion.div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center space-y-2">
                <h3 className="text-2xl font-bold text-green-600 animate-bounce">
                  🎉 Booking Confirmed!
                </h3>
                <p className="text-gray-600">We’ll see you soon. Redirecting to home...</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// 📦 Reusable InputField Component
function InputField({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
      />
    </div>
  );
}

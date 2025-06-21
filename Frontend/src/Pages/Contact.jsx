import { Phone, Mail, MapPin, Scissors, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Barber Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg mt-3 text-gray-200 max-w-2xl"
          >
            Whether you're booking a trim or just saying hi — we're just a call away.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              icon: <Phone size={32} className="text-indigo-600 mx-auto mb-3 animate-bounce" />,
              title: "Phone",
              value: "+91 98731 14785",
            },
            {
              icon: <Mail size={32} className="text-yellow-500 mx-auto mb-3 animate-pulse" />,
              title: "Email",
              value: "support@thefadesandcuts.com",
            },
            {
              icon: <MapPin size={32} className="text-green-600 mx-auto mb-3 animate-bounce" />,
              title: "Address",
              value: "Nawanshahr, Punjab, India",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition duration-300"
            >
              {item.icon}
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Animated Icons */}
        <div className="flex justify-center mt-12 gap-6">
          <Scissors size={36} className="text-red-500 animate-spin-slow" />
          <Star size={36} className="text-yellow-400 animate-bounce" />
          <Heart size={36} className="text-pink-500 animate-pulse" />
        </div>
      </section>

      {/* Message Form */}
      <section className="py-16 px-4 sm:px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
            Have a question or feedback? Drop us a message and we’ll get back to you as soon as we can.
          </p>

          <form className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-md w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-md w-full"
            />
            <textarea
              placeholder="Your Message"
              aria-label="Your Message"
              rows="4"
              required
              className="border rounded-lg p-3 shadow-md focus:ring-2 focus:ring-indigo-500 outline-none sm:col-span-2 w-full"
            ></textarea>
            <button
              type="submit"
              className="sm:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

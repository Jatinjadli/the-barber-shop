import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">The Fades & Cuts</h2>
          <p className="text-sm text-gray-400">
            Redefining modern grooming with precision fades, facial treatments, and premium hair services. Elegance. Skill. Style.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>• Haircuts & Fades</li>
            <li>• Facial & D-Tan</li>
            <li>• Perms & Styling</li>
            <li>• Rebonding & Smoothing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-indigo-500" />
              Nawanshahr, Punjab, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-500" />
              +91 98731 14785
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              support@thefadesandcuts.com
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <Instagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} The Fades & Cuts. All rights reserved.
      </div>
    </footer>
  );
}

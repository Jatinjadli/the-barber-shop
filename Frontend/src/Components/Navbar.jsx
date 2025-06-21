import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = search.toLowerCase();

    if (q.includes("hairstyle")) {
      window.location.href = "/#hairstyles";
    } else if (q.includes("product")) {
      window.location.href = "/#products";
    } else if (q.includes("service")) {
      navigate("/services");
    } else if (q.includes("about")) {
      navigate("/about");
    } else if (q.includes("contact")) {
      navigate("/contact");
    } else if (q.includes("login")) {
      navigate("/login");
    } else if (q.includes("signup")) {
      navigate("/signup");
    } else {
      navigate("/");
    }

    setSearch("");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-wide">
          {/* Replace this with a custom barber-themed icon if desired */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M3 7h18M3 17h18M7 7v10m10-10v10M7 12h10" />
          </svg>
          <span>The Fades & Cuts</span>
        </Link>

        {/* Search Bar (Desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center backdrop-blur-sm bg-white/10 border border-white/20 rounded-full overflow-hidden"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hairstyles, products..."
            className="px-4 py-2 text-white bg-transparent placeholder-white outline-none w-64"
          />
          <button type="submit" className="px-4 py-2 bg-white/20 hover:bg-white/30 transition">
            <Search className="text-white" size={18} />
          </button>
        </form>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="px-4 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/10 hover:shadow-md hover:shadow-white/20 transition-all duration-200"
            >
              {item}
            </Link>
          ))}

          <Link
            to="/login"
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold text-green-400 hover:bg-green-400/10 transition"
          >
            <LogIn size={16} /> Login
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold text-yellow-400 hover:bg-yellow-400/10 transition"
          >
            <UserPlus size={16} /> Signup
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 text-white space-y-3">
          {/* Search Bar (Mobile) */}
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-white/20 rounded-full overflow-hidden"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hairstyles, products..."
              className="px-4 py-2 bg-transparent text-white placeholder-white outline-none w-full"
            />
            <button type="submit" className="px-3 py-2 bg-white/20">
              <Search size={18} />
            </button>
          </form>

          {/* Mobile Nav Links */}
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 rounded-full hover:bg-white/10 transition"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 rounded-full text-green-400 hover:bg-green-400/10"
          >
            <LogIn size={16} className="inline mr-1" /> Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 rounded-full text-yellow-400 hover:bg-yellow-400/10"
          >
            <UserPlus size={16} className="inline mr-1" /> Signup
          </Link>
        </div>
      )}
    </nav>
  );
}

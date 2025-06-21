import { useEffect, useState } from "react";
import { ShoppingCart, BadgePercent, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const allProducts = [
  {
    id: 1,
    name: "Hair Styling Gel",
    category: "Hair",
    image: "/images/hairgel.jpg",
    price: 199,
    stock: 8,
  },
  {
    id: 2,
    name: "Beard Oil",
    category: "Beard",
    image: "/images/boil.jpg",
    price: 299,
    stock: 5,
  },
  {
    id: 3,
    name: "Shaving Foam",
    category: "Shave",
    image: "/images/foam.jpg",
    price: 149,
    stock: 12,
  },
  {
    id: 4,
    name: "Hair Wax",
    category: "Hair",
    image: "/images/wax.jpg",
    price: 249,
    stock: 20,
  },
  {
    id: 5,
    name: "Beard Comb",
    category: "Beard",
    image: "/images/comb.jpg",
    price: 99,
    stock: 3,
  },
];

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setFilteredProducts(
      category === "All" ? allProducts : allProducts.filter((p) => p.category === category)
    );
  }, [category]);

  const groupedCart = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id]
      ? { ...acc[item.id], qty: acc[item.id].qty + 1 }
      : { ...item, qty: 1 };
    return acc;
  }, {});

  const addToCart = (product) => {
    const currentQty = groupedCart[product.id]?.qty || 0;

    if (currentQty >= product.stock) {
      toast.error(`Only ${product.stock} in stock! You've reached the limit.`);
      return;
    }

    if (currentQty >= 10) {
      toast.error("You can't add more than 10 of the same product.");
      return;
    }

    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart 🛒`);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const calculateTotal = () => {
    return Object.values(groupedCart).reduce((total, item) => {
      const discountedPrice = item.price / 2;
      return total + discountedPrice * item.qty;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 px-4 sm:px-6 py-12 text-gray-800 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Shop Products
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/cart")}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold shadow-md relative transition"
        >
          <ShoppingCart size={18} />
          Go to Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-indigo-600 px-2 py-[1px] rounded-full text-xs font-bold shadow">
              {cart.length}
            </span>
          )}
        </motion.button>
      </div>

      {/* Offer Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <div className="bg-indigo-600 text-white rounded-xl py-4 px-6 shadow-md text-lg font-semibold tracking-wide">
          🎉 Get <span className="underline">50% OFF</span> on your first order – Limited Time!
        </div>
      </motion.div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-24 left-6 bg-white/90 backdrop-blur-md border border-indigo-200 rounded-2xl shadow-xl p-4 z-50 w-[280px]"
        >
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BadgePercent size={20} className="text-indigo-600" />
            Cart Summary
          </h2>
          <ul className="space-y-2 text-sm">
            {Object.values(groupedCart).map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.qty}</span>
                <span className="font-semibold text-indigo-700">
                  ₹{(item.price / 2) * item.qty}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-right font-semibold text-indigo-800">
            Total: ₹{calculateTotal()}
          </div>
        </motion.div>
      )}

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Hair", "Beard", "Shave"].map((cat) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition shadow-md hover:shadow-lg ${
              category === cat ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredProducts.map((product) => {
          const currentQty = groupedCart[product.id]?.qty || 0;
          const isOutOfStock = product.stock === 0 || currentQty >= product.stock || currentQty >= 10;

          return (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200 hover:shadow-indigo-300 transition duration-300 relative flex flex-col"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
                />
                {/* Discount Badge */}
                <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
                  50% OFF
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:text-red-500 transition ${
                    wishlist.includes(product.id) ? "text-red-600" : "text-gray-400"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={wishlist.includes(product.id) ? "red" : "none"}
                  />
                </button>

                {/* Limited Stock Badge */}
                {product.stock <= 5 && (
                  <div className="absolute top-10 right-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-[2px] rounded-full shadow animate-bounce">
                    Limited Stock
                  </div>
                )}

                {/* Bottom Stock Alert */}
                {product.stock <= 5 && (
                  <div className="absolute bottom-2 left-2 bg-red-500 text-white text-[11px] font-semibold px-2 py-[2px] rounded shadow animate-pulse">
                    Only {product.stock - currentQty} left!
                  </div>
                )}
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
              <p className="text-lg font-bold mb-4">
                <span className="line-through text-gray-500 mr-2">₹{product.price}</span>
                <span className="text-green-600">₹{product.price / 2}</span>
              </p>

              {/* Add to Cart */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart(product)}
                disabled={isOutOfStock}
                className={`mt-auto px-4 py-2 rounded-full font-semibold w-full transition ${
                  isOutOfStock
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                {isOutOfStock ? "Unavailable" : "Add to Cart"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

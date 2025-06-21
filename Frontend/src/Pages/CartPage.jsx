import { useEffect, useState } from "react";
import {
  Trash2,
  ShoppingCart,
  Sparkles,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isFirstOrder, setIsFirstOrder] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));

    const firstOrderFlag = localStorage.getItem("firstOrderDone");
    setIsFirstOrder(!firstOrderFlag);
  }, []);

  const grouped = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id]
      ? { ...acc[item.id], qty: acc[item.id].qty + 1 }
      : { ...item, qty: 1 };
    return acc;
  }, {});

  const increaseQty = (id) => {
    const item = Object.values(grouped).find((i) => i.id === id);
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`+1 ${item.name}`, { icon: "➕" });
  };

  const decreaseQty = (id) => {
    let removed = false;
    const newCart = [];
    for (let item of cart) {
      if (!removed && item.id === id) {
        removed = true;
        continue;
      }
      newCart.push(item);
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast(`-1 item removed`, { icon: "➖" });
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast(`Item removed`, { icon: "🗑️" });
  };

  const calculateSubtotal = () =>
    Object.values(grouped).reduce((sum, item) => sum + item.qty * item.price, 0);

  const subtotal = calculateSubtotal();
  const discount = isFirstOrder ? subtotal * 0.5 : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen p-6 sm:p-12 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mb-10 flex items-center gap-3"
        >
          <ShoppingCart size={36} className="text-indigo-600" />
          Your Cart
        </motion.h1>

        {/* Empty Cart UI */}
        <AnimatePresence>
          {Object.values(grouped).length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center mt-32"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ShoppingBag size={80} className="mx-auto text-gray-400 mb-4" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                Your cart is empty
              </h2>
              <button
                onClick={() => navigate("/products")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow mt-4"
              >
                Shop Products Now
              </button>
            </motion.div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-6">
                {Object.values(grouped).map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-5 rounded-2xl shadow-md border flex flex-col sm:flex-row justify-between sm:items-center gap-4"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg border"
                      />
                      <div>
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-600">₹{item.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-indigo-600">
                        ₹{item.qty * item.price}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 mt-2 flex items-center gap-1 text-sm hover:underline"
                      >
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bill Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 p-6 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl border text-right space-y-4 max-w-md ml-auto"
              >
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                {isFirstOrder && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span className="flex items-center gap-1">
                      <Sparkles size={18} /> 50% Off (First Order)
                    </span>
                    <span>- ₹{discount}</span>
                  </div>
                )}

                <div className="border-t pt-4 flex justify-between text-xl font-bold text-indigo-700">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </motion.div>

              {/* Checkout Button */}
              <div className="mt-10 text-right">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/checkout")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
                >
                  Proceed to Checkout →
                </motion.button>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

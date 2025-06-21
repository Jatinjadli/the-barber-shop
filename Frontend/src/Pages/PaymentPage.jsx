import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Wallet,
  Banknote,
  CheckCircle2,
  IndianRupee,
  ArrowLeftCircle,
} from "lucide-react";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [paymentMode, setPaymentMode] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const grouped = storedCart.reduce((acc, item) => {
      acc[item.id] = acc[item.id]
        ? { ...acc[item.id], qty: acc[item.id].qty + 1 }
        : { ...item, qty: 1 };
      return acc;
    }, {});
    const calculatedTotal = Object.values(grouped).reduce((sum, item) => {
      const discountedPrice = item.price / 2; // 50% OFF logic
      return sum + discountedPrice * item.qty;
    }, 0);
    setTotal(calculatedTotal);
  }, []);

  const handlePay = () => {
    if (paymentMode === "upi" && !upiId.trim()) {
      alert("Please enter a valid UPI ID.");
      return;
    }

    if (
      paymentMode === "card" &&
      (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)
    ) {
      alert("Please fill in all card details.");
      return;
    }

    localStorage.removeItem("cart");
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 drop-shadow-sm">
          Final Step: Payment
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Complete your order securely
        </p>
      </motion.div>

      {/* Payment Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-gray-200 relative"
        style={{
          backgroundImage: "url(https://www.transparenttextures.com/patterns/cubes.png)",
        }}
      >
        {/* Back */}
        <button
          onClick={() => navigate("/checkout")}
          className="absolute top-4 left-4 text-sm text-indigo-600 font-semibold flex items-center gap-1 hover:underline"
        >
          <ArrowLeftCircle size={18} />
          Back
        </button>

        {/* Payment Info */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-500 font-medium">Amount Payable</p>
          <p className="text-4xl font-bold text-indigo-800 flex justify-center items-center gap-2 mt-1">
            <IndianRupee size={26} /> {total}
          </p>
          <p className="text-sm text-green-600 font-medium mt-1">
            * 50% OFF Applied on First Order
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          <button
            onClick={() => setPaymentMode("upi")}
            className={`flex items-center justify-start gap-3 p-4 rounded-xl border ${
              paymentMode === "upi"
                ? "bg-indigo-100 text-indigo-700 border-indigo-400"
                : "bg-gray-50 text-gray-700 border-gray-200"
            }`}
          >
            <Wallet size={20} /> UPI / Wallet
          </button>
          <button
            onClick={() => setPaymentMode("card")}
            className={`flex items-center justify-start gap-3 p-4 rounded-xl border ${
              paymentMode === "card"
                ? "bg-blue-100 text-blue-700 border-blue-400"
                : "bg-gray-50 text-gray-700 border-gray-200"
            }`}
          >
            <CreditCard size={20} /> Credit / Debit Card
          </button>
          <button
            onClick={() => setPaymentMode("cod")}
            className={`flex items-center justify-start gap-3 p-4 rounded-xl border ${
              paymentMode === "cod"
                ? "bg-yellow-100 text-yellow-700 border-yellow-400"
                : "bg-gray-50 text-gray-700 border-gray-200"
            }`}
          >
            <Banknote size={20} /> Cash on Delivery
          </button>
        </div>

        {/* Payment Fields */}
        {paymentMode === "upi" && (
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Enter your UPI ID
            </label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="e.g. yourname@upi"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        )}

        {paymentMode === "card" && (
          <div className="space-y-4 mb-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Cardholder Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-1">Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-1">CVV</label>
                <input
                  type="password"
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* Pay Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handlePay}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
        >
          Complete Payment
        </motion.button>
      </motion.div>
    </div>
  );
}

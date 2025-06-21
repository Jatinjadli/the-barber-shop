// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Layout and Pages
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Login from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import BookingForm from "./Pages/BookingForm";
import StylesPage from "./Pages/StylesPage";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import AddressPage from "./Pages/AddressPage";
import PaymentPage from "./Pages/PaymentPage";
import SuccessPage from "./Pages/SuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="book" element={<BookingForm />} />
        <Route path="styles" element={<StylesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<AddressPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}

export default App;

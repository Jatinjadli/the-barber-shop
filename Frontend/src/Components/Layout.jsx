import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";


export default function Layout() {
  const { pathname } = useLocation();

  // If current route is home page ("/"), no padding needed
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen bg-white ${
          isHome ? "" : "pt-20 px-4 md:px-8"
        }`}
      >
        <Outlet />
        
      </main>
      
       <Footer/>
    </>
  );
}

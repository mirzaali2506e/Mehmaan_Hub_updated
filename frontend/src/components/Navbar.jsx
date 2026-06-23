// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">Mehmaan Hub</h2>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-neutral-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex justify-between items-center">
        
        {/* Modern Brand Logo Area (Zillow/Airbnb Infused Minimalist Style) */}
        <div className="flex items-center shrink-0">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-black tracking-tight text-neutral-900 group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-rose-600 transition-colors duration-200">
              M
            </div>
            <span className="tracking-tighter">
              Mehmaan<span className="text-rose-500 font-semibold">Hub</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links & Action Controls (Airbnb/Booking.com Style) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-rose-500 after:transition-all after:duration-200"
            >
              Home
            </Link>
            <span className="h-4 w-[1px] bg-neutral-200" />
            <Link
              to="/login"
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>

          <Link
            to="/register"
            className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Hamburger Button Trigger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu (SaaS Premium Sliding Feel) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-neutral-800 hover:text-rose-500 hover:bg-neutral-50 px-3 py-2.5 rounded-xl transition-all"
          >
            Home
          </Link>
          
          <hr className="border-neutral-100" />

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center text-sm font-semibold text-neutral-700 bg-neutral-50 hover:bg-neutral-100 py-3 rounded-xl transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 py-3 rounded-xl shadow-sm transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
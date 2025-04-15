import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="pt-4">
      <nav className="bg-white dark:bg-black text-black dark:text-white shadow-md fixed w-full top-0 z-50 transition-colors duration-300">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="DollarDucks Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold">DollarDucks</span>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FiChevronDown,
  FiChevronUp,
  FiTrendingUp,
  FiMapPin,
  FiBriefcase,
  FiUsers,
  FiBookOpen,
  FiMic,
  FiFileText,
  FiGlobe,
  FiUploadCloud,
} from "react-icons/fi";
import DarkModeToggle from "../Components/DarkModeToggle";
import logo from "../assets/logo3.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Reset dropdowns when route changes
  useEffect(() => {
    setActiveMenu(null);
    setMobileDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  const handleHover = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const toggleMobileDropdown = (menu) =>
    setMobileDropdown(mobileDropdown === menu ? null : menu);

  const handleClick = (menu) => {
    navigate(`/${menu.toLowerCase()}`);
    setMenuOpen(false);
  };

  const dropdownItems = {
    Services: [
      { title: "Pro-Level Website", link: "/pro-level-website", icon: <FiTrendingUp /> },
      { title: "Meta & Google Ads", link: "/meta-google-ads", icon: <FiMapPin /> },
      { title: "Automated Lead Management", link: "/automated-lead-management", icon: <FiUsers /> },
      { title: "Neighborhood SEO", link: "/neighborhood-seo", icon: <FiGlobe /> },
      { title: "SEO Power Play", link: "/seo-power-play", icon: <FiUploadCloud /> },
      { title: "Growth-Focused Add-Ons", link: "/growth-focused-add-ons", icon: <FiBriefcase /> },
    ],
    WhoWeServe: [
      { title: "Local Businesses", link: "/local-businesses", icon: <FiUsers /> },
      { title: "Professionals & Experts", link: "/professionals-experts", icon: <FiBriefcase /> },
      { title: "Small Business Champions", link: "/small-business-champions", icon: <FiGlobe /> },
    ],
    Academy: [
      {
        title: (
          <>
            <s>News</s> <span className="text-gray-500 ml-20">Coming Soon</span>
          </>
        ),
        link: "/news",
        icon: <FiGlobe />,
      },
      {
        title: (
          <>
            <s>Podcast</s> <span className="text-gray-500 ml-15">Coming Soon</span>
          </>
        ),
        link: "/podcast",
        icon: <FiMic />,
      },
      {
        title: (
          <>
            <s>Dollar Ducks Academy</s> <span className="text-sm text-gray-500">Coming soon</span>
          </>
        ),
        link: "/DollarDucks-academy",
        icon: <FiGlobe />,
      },
    ],
  };

  return (
    <div className="pt-4 w-full">
      <nav className="bg-black text-white shadow-md fixed w-screen top-0 z-50">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="DollarDucks Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6">
            {Object.keys(dropdownItems).map((menu) => (
              <li
                key={menu}
                className="relative"
                onMouseEnter={() => handleHover(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className="cursor-pointer capitalize hover:text-yellow-300 transition-all duration-300"
                  onClick={() => handleClick(menu)}
                >
                  {menu.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <AnimatePresence>
                  {activeMenu === menu && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute left-0 top-full mt-2 w-80 bg-white text-black shadow-lg rounded-lg p-4 grid grid-cols-1 gap-4 border z-50"
                    >
                      {dropdownItems[menu].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => {
                            navigate(item.link);
                          }}
                          className="hover:bg-yellow-200 p-3 rounded-lg flex items-start gap-3 cursor-pointer"
                        >
                          <div className="text-yellow-500 text-xl">
                            {item.icon}
                          </div>
                          <div className="font-bold text-black">
                            {item.title}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
            <li>
              <Link
                to="/pricing"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Pricing
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex space-x-4 items-center">
            <Link
              to="/BookaDemo"
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300"
            >
              Book a Demo
            </Link>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white hover:text-yellow-300"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-black p-4 absolute top-16 left-0 w-full shadow-lg z-40">
            <ul className="flex flex-col space-y-4 text-center">
              {Object.keys(dropdownItems).map((menu) => (
                <li key={menu} className="relative">
                  <button
                    className="flex justify-between w-full px-4 py-2 text-white hover:text-yellow-300"
                    onClick={() => toggleMobileDropdown(menu)}
                  >
                    {menu.replace(/([A-Z])/g, " $1").trim()}
                    {mobileDropdown === menu ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>
                  {mobileDropdown === menu && (
                    <ul className="bg-gray-800 text-white rounded-lg py-2 px-4 mt-1">
                      {dropdownItems[menu].map((item, index) => (
                        <li
                          key={index}
                          className="py-1 hover:text-yellow-400 transition-all duration-300 flex items-center space-x-2"
                        >
                          {item.icon}
                          <Link to={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/pricing"
                  className="flex justify-between w-full px-4 py-2 text-white hover:text-yellow-300"
                >
                  Pricing
                </Link>
              </li>
              <div className="flex items-center justify-between w-full gap-4 mt-4">
                <Link
                  to="/BookaDemo"
                  className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300"
                >
                  Book a Demo
                </Link>
                <div className="ml-auto">
                  <DarkModeToggle />
                </div>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

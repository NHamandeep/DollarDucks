import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import NewsletterSubscription from "../Pages/NewsletterSubscription";

const Footer = () => {
  return (
    // border-t border-gray-200 mt-12 pt-8 text-center
    <footer className=" container mx-auto p-6 border-t-2 border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {/* <h3 className="font-semibold text-lg mb-4 md:text-xl lg:text-2xl">Dollar Ducks</h3> */}

          {/* Company Section */}
          <div className="space-y-4">
          <p className=" text-lg mb-4"><strong>Dollar Ducks</strong> </p>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about-us" 
                  className="hover:text-yellow-600 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/BookaDemo" 
                  className="hover:text-yellow-600 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-yellow-600 transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-yellow-600 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
            <a
                href="https://github.com/DollarDucks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.instagram.com/dollar_ducks/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dollar-ducks-8b2b6429b/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-6">
            <div>
            <p className=" text-lg mb-4"><strong>Address (United States)</strong> </p>
              <address className="not-italic mt-2">
                131 Continental Dr., Ste. #305
                <br /> Newark, Delaware 19713
                <br /> Tel:{" "}
                <a
                  href="tel:+18186578233"
                  className="text-blue-500 hover:underline"
                >
                 (+1) 818-657-8233
                </a>
              </address>
            </div>

            <div>
            <p className=" text-lg mb-4"><strong>Address (India)</strong> </p>
              <address className="not-italic mt-2 ">
              Next 57 Coworking <br /> 163, 4th Floor, 
                 JLPL Industrial Area,<br /> Sector - 82
                 Mohali
                <br /> Tel:{" "}
                <a
                  href="tel:+916280236080"
                  className="text-blue-500 hover:underline"
                >
                  (+91) 628-023-6080
                </a>
              </address>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <NewsletterSubscription />
          </div>
        </div>

        <div className="border-t border-gray-200 mt-5 pt-4 text-center">
          {/* <Link
            to="/"
            className="inline-flex items-center justify-center"
            aria-label="Home"
          >
            <img 
              src={logo} 
              alt="DollarDucks Logo" 
              className="h-10 w-auto" 
            />
          </Link> */}
          <p className="  text-sm">
            <strong>Dollar Ducks ©</strong> {new Date().getFullYear()} <strong>| A Brand of YPCA LLC</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
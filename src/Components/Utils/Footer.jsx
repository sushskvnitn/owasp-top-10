import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We're passionate about web security and helping developers create safe applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/" className="hover:text-blue-500">About</a></li>
              <li><a href="/" className="hover:text-blue-500">Contact</a></li>
              <li><a href="/" className="hover:text-blue-500">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-blue-600">
                <FaTwitter />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-blue-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 mb-12"></div>

        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} OWASP Top 10 Vulnerabilities Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

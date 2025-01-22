import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              We are dedicated to raising awareness about web security and empowering developers to build secure applications. Our mission is to educate and provide resources on the OWASP Top 10 vulnerabilities to help you protect your applications from potential threats.
            </p>
          </div>

          {/* Quick Links - General */}
          <div>
            <h3 className="text-xl font-bold mb-4">General Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Quick Links - Vulnerabilities */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vulnerability Demos</h3>
            <ul className="space-y-2">
              <li><Link to="/sqlinjection" className="hover:text-blue-400">SQL Injection Demo</Link></li>
              <li><Link to="/BrokenAuthDemo" className="hover:text-blue-400">Broken Authentication Demo</Link></li>
              <li><Link to="/SensitiveDataExposure" className="hover:text-blue-400">Sensitive Data Exposure Demo</Link></li>
              <li><Link to="/XMLExternalEntities" className="hover:text-blue-400">XML External Entities Demo</Link></li>
              <li><Link to="/BrokenAccessControl" className="hover:text-blue-400">Broken Access Control Demo</Link></li>
            </ul>
          </div>

          {/* Quick Links - Advanced Demos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Advanced Demos</h3>
            <ul className="space-y-2">
              <li><Link to="/SecurityMisconfiguration" className="hover:text-blue-400">Security Misconfiguration Demo</Link></li>
              <li><Link to="/xss-demo" className="hover:text-blue-400">Cross-Site Scripting (XSS) Demo</Link></li>
              <li><Link to="/InsecureDeserialization" className="hover:text-blue-400">Insecure Deserialization Demo</Link></li>
              <li><Link to="/ComponentswithKnownVulnerability" className="hover:text-blue-400">Components with Known Vulnerabilities Demo</Link></li>
              <li><Link to="/InsufficientLoggingMonitoring" className="hover:text-blue-400">Insufficient Logging & Monitoring Demo</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-gray-700 pt-8">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-blue-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-blue-400"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-400 leading-relaxed">
            © {new Date().getFullYear()} OWASP Top 10 Vulnerabilities Project. All rights reserved.
            <br />
            Learn more about web security and the OWASP Top 10 at{' '}
            <Link to="https://owasp.org" className="text-blue-400 hover:underline">
              OWASP.org
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


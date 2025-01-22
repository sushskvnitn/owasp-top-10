'use client'
import { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">OWASP Top 10 Security</span>
            <img
              alt="OWASP"
              src="https://w7.pngwing.com/pngs/360/442/png-transparent-owasp-web-application-security-computer-security-vulnerability-logo-zap-purple-violet-web-application.png"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/OwaspTop10" className="text-sm font-semibold text-gray-900">
            OWASP Top 10
          </Link>
          <Link to="/vulnerabilities" className="text-sm font-semibold text-gray-900">
            Security Resources
          </Link>
          <Link to="/about" className="text-sm font-semibold text-gray-900">
            About Us
          </Link>
          <Link to="/login" className="text-sm font-semibold text-gray-900 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">OWASP Top 10 Security</span>
              <img
                alt="OWASP"
                src="https://w7.pngwing.com/pngs/882/193/png-transparent-owasp-top-10-webscarab-application-security-computer-security-richard-stallman-logo-electric-blue-vulnerability.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/OwaspTop10"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  OWASP Top 10
                </Link>
                <Link
                  to="/vulnerabilities"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Security Resources
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
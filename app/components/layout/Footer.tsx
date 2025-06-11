
import React from 'react';
import { Facebook, Instagram , Twitter } from 'lucide-react';

export default function Footer() {
  return (
    // Add bg-white and border-t
    <footer className="bg-[#002C5A] border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section (re-styled from your screenshot) */}
        <div>
          <p className="text-white">&copy; 2024 American</p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">About Us</h3>
          <ul className="text-white space-y-1">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" aria-label="Facebook" className="text-white hover:text-blue-600">
              <Facebook />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500">
              <Instagram />
            </a>

            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-100">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
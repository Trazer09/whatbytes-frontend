// app/components/layout/Footer.tsx
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Left Section */}
        <div>
          <h3 className="font-bold text-lg">Filters</h3>
          <p className="text-gray-600">&copy; 2024 American</p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-bold text-lg">About Us</h3>
          <ul className="text-gray-600">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
              <Facebook />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-pink-500">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
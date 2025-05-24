import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer className="bg-[#1d3557] text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-xl font-bold mb-2">Grade Report</h4>
          <p className="text-sm text-cyan-100">
            Simplifying academic management for schools and colleges with modern tools.
          </p>
          <p className="text-sm text-cyan-100 mt-4">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline text-cyan-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline text-cyan-200">Contact</Link></li>
            <li><Link to="/privacy" className="hover:underline text-cyan-200">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline text-cyan-200">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <ul className="space-y-2 text-sm text-cyan-100">
            <li>Email: <a href="mailto:support@graderesults.com" className="underline">support@graderesults.com</a></li>
            <li>Phone: <span className="text-cyan-200">+1 (800) 123-4567</span></li>
            <li className="flex gap-4 mt-2">
              <a href="#" className="hover:underline text-cyan-200">Facebook</a>
              <a href="#" className="hover:underline text-cyan-200">Twitter</a>
              <a href="#" className="hover:underline text-cyan-200">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
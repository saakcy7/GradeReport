import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3cb2cc] text-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Brand Title */}
        <div className="text-2xl font-bold tracking-wide">Result Management</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <li><Link to="/" className="hover:text-[#e0f7fa] transition duration-200">Home</Link></li>
          <li><Link to="/students" className="hover:text-[#e0f7fa] transition duration-200">Students</Link></li>
          <li><Link to="/add-student" className="hover:text-[#e0f7fa] transition duration-200">Add Student</Link></li>
          <li><Link to="/add-result" className="hover:text-[#e0f7fa] transition duration-200">Add Result</Link></li>
          <li><Link to="/login" className="hover:text-[#e0f7fa] transition duration-200">Login / Signup</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 mt-2 space-y-2 bg-[#3cb2cc] text-sm font-medium">
          <Link to="/" className="block py-2 border-b border-white/20 hover:text-[#e0f7fa]">Home</Link>
          <Link to="/students" className="block py-2 border-b border-white/20 hover:text-[#e0f7fa]">Students</Link>
          <Link to="/add-student" className="block py-2 border-b border-white/20 hover:text-[#e0f7fa]">Add Student</Link>
          <Link to="/add-result" className="block py-2 border-b border-white/20 hover:text-[#e0f7fa]">Add Result</Link>
          <Link to="/login" className="block py-2 hover:text-[#e0f7fa]">Login / Signup</Link>
        </div>
      )}
    </nav>
  );
}

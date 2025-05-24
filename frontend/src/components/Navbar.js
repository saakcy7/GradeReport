import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaPlusCircle,
  FaClipboardList,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaPhone,
  FaSignOutAlt
} from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-poppins shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-4xl font-light-bold tracking-tight hover:text-cyan-200 transition duration-300"
          aria-label="Result Management Home"
        >
          <FaRankingStar className="text-3xl" />
          <span>Grade Report</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base items-center">
          {!isLoggedIn ? (
            <li>
            <Link to="/" className="flex items-center space-x-1 hover:text-cyan-200 transition duration-300">
              <FaHome /> <span>Home</span>
            </Link>
          </li>
         ) : (
            <li>
            <Link to="/dashboard" className="flex items-center space-x-1 hover:text-cyan-200 transition duration-300">
              <FaHome /> <span>Home</span>
            </Link>
            </li>
          )}
            
              <li>
                <Link to="/about" className="flex items-center space-x-1 hover:text-cyan-200 transition duration-300">
                  <FaInfoCircle /> <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center space-x-1 hover:text-cyan-200 transition duration-300">
                  <FaPhone /> <span>Contact</span>
                </Link>
              </li>
            {!isLoggedIn ? (
              <li>
                <Link to="/login" className="flex items-center space-x-1 hover:text-cyan-200 transition duration-300">
                  <FaSignInAlt /> <span>Login / Signup</span>
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-cyan-200 transition duration-300"
                >
                  <FaSignOutAlt /> <span>Logout</span>
                </button>
              </li>
            )}
              
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium space-y-4 px-6 pb-6 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
          <FaHome /> <span>Home</span>
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaInfoCircle /> <span>About</span>
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaPhone /> <span>Contact</span>
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaSignInAlt /> <span>Login / Signup</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/students" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaUserGraduate /> <span>Students</span>
            </Link>
            <Link to="/add-student" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaPlusCircle /> <span>Add Student</span>
            </Link>
            <Link to="/add-result" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaClipboardList /> <span>Add Result</span>
            </Link>
            <Link to="/getresults" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaClipboardList /> <span>Get Results</span>
            </Link>
            <Link to="/getreport" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 py-2 hover:text-cyan-200">
              <FaClipboardList /> <span>Get Report</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 py-2 hover:text-cyan-200"
            >
              <FaSignOutAlt /> <span>Logout</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

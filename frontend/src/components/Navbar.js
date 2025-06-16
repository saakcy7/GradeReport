import { useState, useEffect } from "react";
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
  FaSignOutAlt,
  FaUserCog,
  FaChartLine
} from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token") !== null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setMenuOpen(false);
  };

  const navLinks = [
    { path: isLoggedIn ? "/dashboard" : "/", icon: <FaHome />, text: "Home" },
    { path: "/about", icon: <FaInfoCircle />, text: "About" },
    { path: "/contact", icon: <FaPhone />, text: "Contact" },
  ];

  const authLink = !isLoggedIn ? (
    { path: "/login", icon: <FaSignInAlt />, text: "Login / Signup" }
  ) : (
    { action: handleLogout, icon: <FaSignOutAlt />, text: "Logout" }
  );

  const loggedInLinks = [
    { path: "/students", icon: <FaUserGraduate />, text: "Students" },
    { path: "/add-student", icon: <FaPlusCircle />, text: "Add Student" },
    { path: "/add-result", icon: <FaClipboardList />, text: "Add Result" },
    { path: "/getresults", icon: <FaChartLine />, text: "Results" },
    { path: "/getreport", icon: <FaClipboardList />, text: "Reports" },
    { path: "/profile", icon: <FaUserCog />, text: "Profile" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 font-poppins transition-all duration-300 ${scrolled ? "bg-gradient-to-r from-cyan-600 to-blue-700 shadow-xl py-2" : "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="hover:scale-105 transition-transform duration-200">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-white hover:text-cyan-200 transition duration-300"
              aria-label="Result Management Home"
            >
              <FaRankingStar className="text-3xl text-amber-300" />
              <span>GradeReport</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.path} className="hover:scale-105 transition-transform duration-200">
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${location.pathname === link.path ? "bg-white/20 text-white" : "text-white hover:bg-white/10 hover:text-cyan-200"}`}
                  >
                    {link.icon}
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-white/30 mx-2"></div>

            <div className="hover:scale-105 transition-transform duration-200">
              {authLink.path ? (
                <Link
                  to={authLink.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${location.pathname === authLink.path ? "bg-white/20 text-white" : "bg-white/10 text-white hover:bg-white/20 hover:text-cyan-200"}`}
                >
                  {authLink.icon}
                  <span>{authLink.text}</span>
                </Link>
              ) : (
                <button
                  onClick={authLink.action}
                  className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium bg-white/10 text-white hover:bg-white/20 hover:text-cyan-200 transition duration-300"
                >
                  {authLink.icon}
                  <span>{authLink.text}</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden hover:scale-110 transition-transform duration-200">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {menuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-gradient-to-b from-cyan-600 to-blue-700 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium w-full ${location.pathname === link.path ? "bg-white/20 text-white" : "text-white hover:bg-white/10 hover:text-cyan-200"}`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.text}</span>
            </Link>
          ))}

          {isLoggedIn && (
            <>
              <div className="border-t border-white/20 my-2"></div>
              {loggedInLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium w-full ${location.pathname === link.path ? "bg-white/20 text-white" : "text-white hover:bg-white/10 hover:text-cyan-200"}`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.text}</span>
                </Link>
              ))}
            </>
          )}

          <div className="border-t border-white/20 my-2"></div>
          {authLink.path ? (
            <Link
              to={authLink.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium w-full ${location.pathname === authLink.path ? "bg-white/20 text-white" : "text-white hover:bg-white/10 hover:text-cyan-200"}`}
            >
              <span className="text-lg">{authLink.icon}</span>
              <span>{authLink.text}</span>
            </Link>
          ) : (
            <button
              onClick={() => {
                authLink.action();
                setMenuOpen(false);
              }}
              className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium w-full text-white hover:bg-white/10 hover:text-cyan-200"
            >
              <span className="text-lg">{authLink.icon}</span>
              <span>{authLink.text}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
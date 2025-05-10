import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">Result Management System</div>
        <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base">
          <li>
            <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/students" className="hover:text-gray-300 transition duration-300">Students</Link>
          </li>
          <li>
            <Link to="/add-student" className="hover:text-gray-300 transition duration-300">Add Student</Link>
          </li>
          <li>
            <Link to="/add-result" className="hover:text-gray-300 transition duration-300">Add Result</Link>
          </li>
          <li> 
            <Link to="/login" className="hover:text-gray-300 transition duration-300">login/signup</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

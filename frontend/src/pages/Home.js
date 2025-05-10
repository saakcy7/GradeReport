import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
        Result Management System
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Manage students, add results, and generate report cards seamlessly. Designed for schools and colleges.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/add-student"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add Student
        </Link>
        <Link
          to="/students"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          View Students
        </Link>
        <Link
          to="/add-result"
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Add Result
        </Link>
      </div>
    </div>
  );
}

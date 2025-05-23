import { Link } from 'react-router-dom';
import image1 from '../assets/image1.png'; // Ensure this is the correct image path
export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-[#e6f4fb] flex items-center justify-center px-4 md:px-12 py-12">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text Section */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1d3557] leading-tight">
            Result Management System
          </h1>
          <p className="text-base md:text-lg text-[#457b9d] max-w-xl mx-auto md:mx-0">
            Manage students, add results, and generate report cards seamlessly.
            Designed for schools and colleges to simplify academic workflows.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/add-student"
              className="px-6 py-3 bg-[#3cb2cc] text-white rounded-md shadow hover:bg-[#2f9bb5] transition"
            >
              Add Student
            </Link>
            <Link
              to="/students"
              className="px-6 py-3 bg-[#3cb2cc] text-white rounded-md shadow hover:bg-[#2f9bb5] transition"
            >
              View Students
            </Link>
            <Link
              to="/add-result"
              className="px-6 py-3 bg-[#3cb2cc] text-white rounded-md shadow hover:bg-[#2f9bb5] transition"
            >
              Add Result
            </Link>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="flex justify-center">
          <img
            src={image1}
            alt="Result Management"
className=" w-full max-w-[500px] object-contain md:h-auto h-64"
          />
        </div>
      </div>
    </div>
    </>
  );
}

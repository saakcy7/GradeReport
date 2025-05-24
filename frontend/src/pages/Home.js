import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[80vh] bg-[#e6f4fb] flex items-center justify-center px-4 md:px-12 py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
          {/* Left: Text Section */}
          <div className="space-y-8 text-center md:text-left self-center">
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
         <div className="flex justify-center self-center">
  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#3cb2cc] p-2 bg-white">
    <img
      src={image1}
      alt="Result Management"
      className="w-full max-w-[500px] object-contain h-auto"
    />
  </div>
</div>
        </div>
      </div>

      {/* Info Cards Section */}
      <section className="bg-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-[#f1f9fc] p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#1d3557] mb-4">Instant Report Cards</h3>
            <p className="text-[#457b9d] text-lg">
              Automatically generate well-formatted report cards with just one click.
            </p>
          </div>
          <div className="bg-[#f1f9fc] p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#1d3557] mb-4">Secure Data Storage</h3>
            <p className="text-[#457b9d] text-lg">
              Student data is encrypted and accessible only by authorized personnel.
            </p>
          </div>
          <div className="bg-[#f1f9fc] p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[#1d3557] mb-4">Time-saving Automation</h3>
            <p className="text-[#457b9d] text-lg">
              Say goodbye to manual processes with automated result management workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f9fbfc] py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-[#1d3557]">What Educators Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ms. Caroline',
                feedback: 'This system saves hours of paperwork and automates everything. Absolutely love it!',
              },
              {
                name: 'Principal D. Kumar',
                feedback: 'Secure, easy to use, and reliable. Our school has seen a 40% drop in admin time.',
              },
              {
                name: 'Prof. Elaine',
                feedback: 'A must-have for any modern institution. Report generation is super fast and clean.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-left">
                <p className="text-[#457b9d] mb-4">“{testimonial.feedback}”</p>
                <h4 className="text-[#1d3557] font-semibold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#3cb2cc] py-16 px-4 md:px-12 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Streamline Your Academic Records?</h2>
          <p className="text-lg md:text-xl">Start using Grade Report today — it's free, fast, and secure.</p>
          <Link
            to="/register"
            className="inline-block bg-white text-[#3cb2cc] px-6 py-3 rounded-md shadow-md font-semibold hover:bg-gray-100 transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
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

import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShieldAlt, FaUsers } from 'react-icons/fa';
import image2 from '../assets/image2.png'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Optional if you have a Footer component

export default function About() {
  return (
    <>
    <section className="bg-[#f9fbfc] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1d3557]">About Us</h2>
          <p className="text-[#457b9d] text-lg leading-relaxed">
            At <span className="font-semibold text-[#3cb2cc]">Grade Report</span>, we believe that academic workflows should be effortless.
            Our mission is to empower educators and institutions with seamless tools to manage students, track performance, and generate report cards in seconds.
          </p>

          {/* Feature Highlights */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-[#3cb2cc] mt-1" />
              <span className="text-[#1d3557] font-medium">Automated result generation with high accuracy</span>
            </li>
            <li className="flex items-start gap-3">
              <FaShieldAlt className="text-[#3cb2cc] mt-1" />
              <span className="text-[#1d3557] font-medium">Data privacy and security built into every feature</span>
            </li>
            <li className="flex items-start gap-3">
              <FaUsers className="text-[#3cb2cc] mt-1" />
              <span className="text-[#1d3557] font-medium">Built by educators, for educators</span>
            </li>
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-block bg-[#3cb2cc] text-white px-6 py-3 rounded-md font-medium shadow hover:bg-[#2f9bb5] transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Image or Illustration */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center text-gray-400">
          <img src={image2} alt="About Us" className="w-full h-full object-cover" />
          
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
    <div className="min-h-screen bg-[#f9fbfc] px-4 py-16 md:px-12">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h1 className="text-4xl font-bold text-[#1d3557]">Contact Us</h1>
        <p className="text-[#457b9d] text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about features, pricing,
          or anything else, our team is ready to answer all your questions.
        </p>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaPhone className="text-[#3cb2cc] text-3xl mb-4 mx-auto" />
            <h4 className="text-[#1d3557] font-semibold text-lg mb-1">Phone</h4>
            <p className="text-[#457b9d]">+1 234 567 8900</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaEnvelope className="text-[#3cb2cc] text-3xl mb-4 mx-auto" />
            <h4 className="text-[#1d3557] font-semibold text-lg mb-1">Email</h4>
            <p className="text-[#457b9d]">support@gradereport.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaMapMarkerAlt className="text-[#3cb2cc] text-3xl mb-4 mx-auto" />
            <h4 className="text-[#1d3557] font-semibold text-lg mb-1">Address</h4>
            <p className="text-[#457b9d]">123 Education St, Cityville</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-[#1d3557] mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-[#1d3557] font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3cb2cc]"
              />
            </div>
            <div>
              <label className="block text-[#1d3557] font-medium mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3cb2cc]"
              />
            </div>
            <div>
              <label className="block text-[#1d3557] font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3cb2cc]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3cb2cc] text-white py-3 rounded-lg font-semibold hover:bg-[#2f9bb5] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

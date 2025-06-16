import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import { FaUserGraduate, FaChartLine, FaShieldAlt, FaClock, FaQuoteLeft, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const stats = [
    { value: "10,000+", label: "Students Managed" },
    { value: "95%", label: "Time Saved" },
    { value: "100%", label: "Data Security" },
    { value: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      icon: <FaUserGraduate className="text-4xl mb-4 text-[#3cb2cc]" />,
      title: "Student Management",
      description: "Easily add, edit, and manage student records with our intuitive interface."
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-[#3cb2cc]" />,
      title: "Performance Analytics",
      description: "Visualize student performance with interactive charts and progress tracking."
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-[#3cb2cc]" />,
      title: "Role-based Access",
      description: "Control access with different permission levels for teachers, admins, and parents."
    },
    {
      icon: <FaClock className="text-4xl mb-4 text-[#3cb2cc]" />,
      title: "Time-saving Tools",
      description: "Bulk uploads, templates, and automation to reduce administrative workload."
    }
  ];

  const testimonials = [
    {
      name: 'Ms. Caroline',
      role: 'Math Teacher',
      feedback: 'This system saves hours of paperwork and automates everything. Absolutely love it!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Principal D. Kumar',
      role: 'School Administrator',
      feedback: 'Secure, easy to use, and reliable. Our school has seen a 40% drop in admin time.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Prof. Elaine',
      role: 'Department Head',
      feedback: 'A must-have for any modern institution. Report generation is super fast and clean.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const benefits = [
    {
      title: "Streamlined Workflow",
      description: "Reduce manual data entry and paperwork with automated processes."
    },
    {
      title: "Real-time Updates",
      description: "Access student results and reports instantly from anywhere."
    },
    {
      title: "Data Accuracy",
      description: "Minimize human errors with our validated input systems."
    },
    {
      title: "Parent Engagement",
      description: "Share results securely with parents through our portal."
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="min-h-[90vh] bg-gradient-to-r from-[#e6f4fb] to-[#d0e9f7] flex items-center justify-center px-4 md:px-12 py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
          <div className="space-y-8 text-center md:text-left self-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1d3557] leading-tight">
              Modern <span className="text-[#3cb2cc]">Result Management</span> System
            </h1>
            <p className="text-base md:text-lg text-[#457b9d] max-w-xl mx-auto md:mx-0">
              Revolutionize how your institution manages academic records. Our platform simplifies student data management, result processing, and report generation in one seamless solution.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-[#3cb2cc] hover:bg-[#2f9bb5] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started - It's Free
              </Link>
              <Link
                to="/demo"
                className="px-6 py-3 bg-white text-[#3cb2cc] border-2 border-[#3cb2cc] font-medium rounded-lg shadow hover:bg-gray-50 transition"
              >
                Live Demo
              </Link>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-[#1d3557]">{stat.value}</p>
                  <p className="text-sm text-[#457b9d]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center self-center animate-float">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3cb2cc] p-2 bg-white transform rotate-1 hover:rotate-0 transition duration-500">
              <img
                src={image1}
                alt="Result Management Dashboard"
                className="w-full max-w-[500px] object-contain h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbfe] py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-4">Powerful Features</h2>
            <p className="text-lg text-[#457b9d] max-w-2xl mx-auto">
              Everything you need to manage academic records efficiently and effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-[#3cb2cc]"
              >
                {feature.icon}
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{feature.title}</h3>
                <p className="text-[#457b9d]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-4">Key Benefits</h2>
            <p className="text-lg text-[#457b9d] max-w-2xl mx-auto">
              Discover how our system can transform your institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-[#f8fbfe] p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-[#3cb2cc] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{benefit.title}</h3>
                <p className="text-[#457b9d]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1d3557] to-[#3cb2cc] py-20 px-4 md:px-12 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
            <p className="text-sm font-medium">TRUSTED BY EDUCATORS WORLDWIDE</p>
          </div>
          <h2 className="text-3xl font-bold mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md text-left hover:bg-white/20 transition duration-300"
              >
                <FaQuoteLeft className="text-3xl text-white/30 mb-4" />
                <p className="mb-6">“{testimonial.feedback}”</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1d3557] to-[#3cb2cc] py-20 px-4 md:px-12 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Academic Management?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of educators who are saving time and improving accuracy with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-4 bg-white text-[#3cb2cc] font-bold rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#0d1a2b] text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-[#3cb2cc] p-2 rounded-lg mr-2">
                <FaUserGraduate />
              </span>
              GradeReport
            </h4>
            <p className="text-gray-400 mb-6">
              Empowering educational institutions with modern, intuitive result management solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/features" className="hover:text-white transition">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="/integrations" className="hover:text-white transition">Integrations</Link></li>
              <li><Link to="/updates" className="hover:text-white transition">Updates</Link></li>
              <li><Link to="/roadmap" className="hover:text-white transition">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/guides" className="hover:text-white transition">Guides</Link></li>
              <li><Link to="/webinars" className="hover:text-white transition">Webinars</Link></li>
              <li><Link to="/help-center" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="/api-docs" className="hover:text-white transition">API Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GradeReport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
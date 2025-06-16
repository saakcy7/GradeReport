import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChartLine, FaFilePdf, FaBell, FaCog, FaSearch } from 'react-icons/fa';
import { MdDashboard, MdAssignment, MdPeople, MdSchool } from 'react-icons/md';
import image1 from '../assets/image1.jpg';

export default function Dashboard() {
  // Sample data for statistics
  const stats = [
    { value: '1,245', label: 'Total Students', icon: <FaUserGraduate className="text-2xl" /> },
    { value: '87%', label: 'Pass Percentage', icon: <FaChartLine className="text-2xl" /> },
    { value: '4.2', label: 'Average GPA', icon: <MdSchool className="text-2xl" /> },
    { value: '632', label: 'Reports Generated', icon: <FaFilePdf className="text-2xl" /> }
  ];

  // Recent activities
  const activities = [
    { id: 1, action: 'New result added for Class 10A', time: '2 mins ago' },
    { id: 2, action: 'Report card generated for Student #2456', time: '15 mins ago' },
    { id: 3, action: 'New student registered', time: '1 hour ago' },
    { id: 4, action: 'System update completed', time: '3 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-[#1d3557] text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MdDashboard className="text-2xl" />
            <span className="text-xl font-bold">GradeMaster</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-[#2a4365]">
              <FaBell />
            </button>
            <button className="p-2 rounded-full hover:bg-[#2a4365]">
              <FaCog />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#3cb2cc] flex items-center justify-center">
                <span className="font-semibold">A</span>
              </div>
              <span className="hidden md:inline">Admin</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
              <div className="p-3 rounded-full bg-[#e6f4fb] text-[#3cb2cc]">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1d3557]">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h1 className="text-3xl font-bold text-[#1d3557] mb-4">Welcome back, Administrator</h1>
                <p className="text-[#457b9d] mb-6">
                  Manage students, add results, and generate report cards seamlessly. 
                  Designed for schools and colleges to simplify academic workflows.
                </p>
                
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#3cb2cc] focus:border-transparent"
                    placeholder="Search students, classes, or results..."
                  />
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <DashboardAction 
                    icon={<MdPeople className="text-2xl" />} 
                    label="Students" 
                    to="/students" 
                    color="bg-[#3cb2cc]" 
                  />
                  <DashboardAction 
                    icon={<MdAssignment className="text-2xl" />} 
                    label="Results" 
                    to="/results" 
                    color="bg-[#4caf50]" 
                  />
                  <DashboardAction 
                    icon={<FaFilePdf className="text-2xl" />} 
                    label="Reports" 
                    to="/reports" 
                    color="bg-[#ff9800]" 
                  />
                  <DashboardAction 
                    icon={<MdSchool className="text-2xl" />} 
                    label="Classes" 
                    to="/classes" 
                    color="bg-[#9c27b0]" 
                  />
                  <DashboardAction 
                    icon={<FaChartLine className="text-2xl" />} 
                    label="Analytics" 
                    to="/analytics" 
                    color="bg-[#e91e63]" 
                  />
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-[#1d3557] mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {activities.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#3cb2cc]"></div>
                    <div>
                      <p className="text-gray-800">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/activities" className="mt-4 inline-block text-[#3cb2cc] text-sm font-medium hover:underline">
                View all activities
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-[#1d3557] mb-4">Announcements</h2>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="font-medium text-blue-800">Mid-term exams schedule released</p>
                  <p className="text-xs text-blue-600 mt-1">2 days ago</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-medium text-yellow-800">System maintenance this weekend</p>
                  <p className="text-xs text-yellow-600 mt-1">5 days ago</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="font-medium text-green-800">New feature: Bulk result upload</p>
                  <p className="text-xs text-green-600 mt-1">1 week ago</p>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                View all announcements
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-[#1d3557] mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Link to="/help" className="block p-2 hover:bg-gray-50 rounded transition text-gray-700">
                  Help Center
                </Link>
                <Link to="/tutorials" className="block p-2 hover:bg-gray-50 rounded transition text-gray-700">
                  Video Tutorials
                </Link>
                <Link to="/support" className="block p-2 hover:bg-gray-50 rounded transition text-gray-700">
                  Contact Support
                </Link>
                <Link to="/settings" className="block p-2 hover:bg-gray-50 rounded transition text-gray-700">
                  System Settings
                </Link>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-[#1d3557] mb-4">System Status</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Database</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">API</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Storage</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">65% used</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Backup</span>
                  <span className="text-gray-500 text-sm">Today, 02:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardAction({ icon, label, to, color }) {
  return (
    <Link
      to={to}
      className={`${color} text-white p-4 rounded-lg flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition shadow-sm`}
    >
      <div>{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // or sessionStorage.getItem('token')
    if (!token) {
      toast.error('Unauthorized. Please log in again.');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error.message);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  // Group by class and section
  const grouped = students.reduce((acc, student) => {
    const key = `${student.className}-${student.section}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(student);
    return acc;
  }, {});

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Student Directory</h2>
      
      {Object.entries(grouped).map(([group, groupStudents]) => {
        const [className, section] = group.split('-');

        return (
          <div key={group} className="mb-8 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Class {className} - Section {section}
            </h3>
            <ul className="divide-y divide-gray-200">
              {groupStudents.map(student => (
                <li key={student._id} className="py-2 flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{student.studentName}</span>
                  <span className="text-sm text-gray-500">Roll: {student.rollNumber}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

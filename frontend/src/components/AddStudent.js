import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddStudent() {
  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    className: '',
    section: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response data:', data); // For debugging

      if (!response.ok) {
        if (data.error && data.error.toLowerCase().includes('only teachers')) {
          toast.error('Access denied: Only teachers can add students.');
        } else if (data.error && data.error.toLowerCase().includes('unauthorized')) {
          toast.error('Unauthorized. Please log in again.');
        } else {
          toast.error(data.error || 'Failed to add student');
        }
        return;
      }

      toast.success('Student added successfully!');
      setFormData({ studentName: '', rollNumber: '', className: '', section: '' });
    } catch (err) {
      console.error('Error adding student:', err);
      toast.error(err.message || 'Error adding student');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {['studentName','rollNumber', 'className', 'section'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Student
        </button>
      </form>
      {/* ToastContainer should be inside your component tree */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

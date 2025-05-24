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
    <div
      className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg"
      style={{ backgroundColor: '#ffffff' }}
    >
      <h2
        className="text-2xl font-extrabold mb-6 text-center"
        style={{ color: '#2f4858' }} // Soft Navy
      >
        Add Student
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['studentName', 'rollNumber', 'className', 'section'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-3 rounded-md focus:outline-none"
            style={{
              border: '2px solid #56c4e0', // Sky Blue
              color: '#2f4858', // Soft Navy text
              fontWeight: '500',
            }}
            required
          />
        ))}

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-bold text-white transition-colors duration-300"
          style={{ backgroundColor: '#2f4858' }} // Soft Navy
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3cb2cc')} // Teal Blue hover
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2f4858')}
        >
          Add Student
        </button>
      </form>

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

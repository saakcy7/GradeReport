import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    rollNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'student',
      rollNumber: ''
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.role) {
        newErrors.role = 'Role is required';
      }
      if (formData.role === 'student' && !formData.rollNumber.trim()) {
        newErrors.rollNumber = 'Roll number is required for students';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted errors.");
      return;
    }

    setLoading(true);
    try {
      const endpoint = isLogin
        ? 'http://localhost:5000/users/login'
        : 'http://localhost:5000/users/register';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          localStorage.setItem('token', data.token);
          toast.success('Login successful!');
          setTimeout(() => {
            window.location.href = '/dashboard'; // Redirect to dashboard after login
          }, 1500);
        } else {
          toast.success('Account created successfully!');
          setIsLogin(true);
          setFormData({ name: '', email: '', password: '', role: 'student', rollNumber: '' });
        }
      } else {
        toast.error(data.error || data.message || 'Something went wrong');
      }
    } catch (err) {
      toast.error('Network or server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {!isLogin && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-2 p-3 border rounded focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mb-2 p-3 border rounded focus:ring-blue-400"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mb-2">{errors.role}</p>}

            {formData.role === 'student' && (
              <>
                <input
                  type="text"
                  name="rollNumber"
                  placeholder="Roll Number"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className="w-full mb-2 p-3 border rounded focus:ring-blue-400"
                />
                {errors.rollNumber && (
                  <p className="text-red-500 text-sm mb-2">{errors.rollNumber}</p>
                )}
              </>
            )}
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-2 p-3 border rounded focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded focus:ring-blue-400"
        />
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Create Account'}
        </button>

        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="text-blue-600 font-medium hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
}

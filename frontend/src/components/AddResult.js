import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddResult() {
  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    rollNumber: '',
    term: '',
    subjects: [{ name: '', marksObtained: '', maxMarks: '' }],
    year: new Date().getFullYear(),
  });
  const [message, setMessage] = useState('');

  const handleChange = (e, index, field) => {
    if (['name', 'marksObtained', 'maxMarks'].includes(field)) {
      const newSubjects = [...formData.subjects];
      newSubjects[index][field] = e.target.value;
      setFormData({ ...formData, subjects: newSubjects });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const addSubject = () => {
    setFormData(prev => ({
      ...prev,
      subjects: [...prev.subjects, { name: '', marksObtained: '', maxMarks: '' }],
    }));
  };

  const removeSubject = (index) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Result added successfully!');
        setFormData({
          rollNumber: '',
          term: '',
          subjects: [{ name: '', marksObtained: '', maxMarks: '' }],
          year: new Date().getFullYear(),
        });
      } else {
        setMessage(result.error || 'Failed to add result.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error.');
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
      <h2
        className="text-3xl font-extrabold mb-6 text-center"
        style={{ color: '#2f4858' /* Soft Navy */ }}
      >
        Add Result
      </h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={(e) => handleChange(e, null, 'rollNumber')}
          className="w-full mb-5 p-3 border-2 rounded-md focus:outline-none"
          style={{
            borderColor: '#56c4e0', // Sky Blue
          }}
          required
        />

        <input
          type="text"
          placeholder="Term"
          value={formData.term}
          onChange={(e) => handleChange(e, null, 'term')}
          className="w-full mb-5 p-3 border-2 rounded-md focus:outline-none"
          style={{
            borderColor: '#56c4e0', // Sky Blue
          }}
          required
        />

        <input
            type="text"
            placeholder="Year"
            value={formData.year}
            onChange={(e) => handleChange(e, null, 'year')}
            className="w-full mb-5 p-3 border-2 rounded-md focus:outline-none"
            style={{
                borderColor: '#56c4e0', // Sky Blue
            }}
            required
        />
        <h3 className="text-xl font-bold mb-4">Subjects</h3>
        

        {formData.subjects.map((subject, i) => (
          <div
            key={i}
            className="mb-6 border-2 rounded-lg p-4 relative"
            style={{ borderColor: '#3cb2cc' /* Teal Blue */ }}
          >
            <input
              type="text"
              placeholder="Subject Name"
              value={subject.name}
              onChange={(e) => handleChange(e, i, 'name')}
              className="w-full p-3 mb-3 rounded-md focus:outline-none"
              style={{
                border: '1.5px solid #56c4e0', // Sky Blue
              }}
              required
            />
            <input
              type="number"
              placeholder="Marks Obtained"
              value={subject.marksObtained}
              onChange={(e) => handleChange(e, i, 'marksObtained')}
              className="w-full p-3 mb-3 rounded-md focus:outline-none"
              min={0}
              style={{
                border: '1.5px solid #56c4e0', // Sky Blue
              }}
              required
            />
            <input
              type="number"
              placeholder="Max Marks"
              value={subject.maxMarks}
              onChange={(e) => handleChange(e, i, 'maxMarks')}
              className="w-full p-3 rounded-md focus:outline-none"
              min={1}
              style={{
                border: '1.5px solid #56c4e0', // Sky Blue
              }}
              required
            />
            {formData.subjects.length > 1 && (
              <button
                type="button"
                onClick={() => removeSubject(i)}
                className="absolute top-2 right-2 text-red-600 font-bold text-xl"
                aria-label="Remove subject"
              >
                &times;
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addSubject}
          className="mb-6 w-full bg-[#3cb2cc] hover:bg-[#56c4e0] text-white font-semibold py-3 rounded-lg transition-colors duration-300"
        >
          + Add Subject
        </button>

        <button
          type="submit"
          className="w-full bg-[#2f4858] hover:bg-[#3cb2cc] text-white font-bold py-3 rounded-lg transition-colors duration-300"
        >
          Submit Result
        </button>
      </form>

      {message && (
        <p className="mt-5 text-center text-red-600 font-medium">{message}</p>
      )}
    </div>
  );
}

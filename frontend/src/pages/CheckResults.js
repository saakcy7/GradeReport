import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CheckResults=()=> {
  const [rollNumber, setRollNumber] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    setResults([]);
    setError('');

    if (!rollNumber.trim()) {
      setError('Please enter a valid roll number');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to check results.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/results/${rollNumber}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Unable to fetch results.');
      } else if (data.length === 0) {
        setError('No results found for this roll number.');
      } else {
        setResults(data);
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleCheck}
        className="bg-white shadow-lg p-6 rounded-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Check Student Results</h2>
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Result'}
        </button>
      </form>

      {results.length > 0 && (
        <div className="bg-white mt-6 p-6 rounded shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-green-600 text-center">
            Result Found
          </h3>
          {results.map((result, index) => (
            <div key={index} className="border-b py-2">
              <p><strong>Term:</strong> {result.term}</p>
              {result.subjects.map((subj, idx) => (
                <div key={idx} className="ml-4">
                  <p><strong>Subject:</strong> {subj.name}</p>
                  <p><strong>Marks:</strong> {subj.marksObtained}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default CheckResults;

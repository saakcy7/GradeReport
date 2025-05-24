import React, { useState } from 'react';

export default function ReportCard() {
  const [rollNumber, setRollNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateReport = async (e) => {
    e.preventDefault();
    setError('');

    if (!rollNumber.trim()) {
      setError('Please enter a valid student ID.');
      return;
    }

    setLoading(true);

    try {
      // Assuming your backend route is: /api/report/:studentId
      const response = await fetch(`http://localhost:5000/reports/${rollNumber}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Failed to fetch report card.');
        setLoading(false);
        return;
      }

      // Get PDF as Blob
      const pdfBlob = await response.blob();

      // Create URL for PDF blob
      const pdfUrl = window.URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));

      // Open PDF in new tab
      window.open(pdfUrl);

      setLoading(false);

    } catch (err) {
      console.error(err);
      setError('Network error. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleGenerateReport}
        className="bg-white shadow-lg p-6 rounded-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Generate Report Card</h2>
        <input
          type="text"
          placeholder="Enter Student RollNumber"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Report'}
        </button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';

export default function ReportCard() {
  const [rollNumber, setRollNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState(null);
  const [shareableLink, setShareableLink] = useState('');

  const handleGenerateReport = async (e) => {
    e.preventDefault();
    setError('');
    setPdfUrl(null);
    setShareableLink('');

    if (!rollNumber.trim()) {
      setError('Please enter a valid student ID.');
      return;
    }

    setLoading(true);

    try {
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
      const url = window.URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));
      setPdfUrl(url);


      const shareLink = `${window.location.origin}/share/report/${rollNumber}`;
      setShareableLink(shareLink);

      setLoading(false);

    } catch (err) {
      console.error(err);
      setError('Network error. Please try again later.');
      setLoading(false);
    }
  };

  const handleViewPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl);
    }
  };

  const handleCopyLink = () => {
    if (shareableLink) {
      navigator.clipboard.writeText(shareableLink)
        .then(() => alert('Link copied to clipboard!'))
        .catch(() => alert('Failed to copy link'));
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Student Report Card',
          text: `Check out this student's report card`,
          url: shareableLink,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      handleCopyLink();
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

        {pdfUrl && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold mb-3">Report Generated Successfully!</h3>
            
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleViewPdf}
                className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                View PDF
              </button>
              
              <div className="flex items-center">
                <input
                  type="text"
                  value={shareableLink}
                  readOnly
                  className="flex-1 p-2 border rounded-l text-sm"
                  placeholder="Shareable link"
                />
                <button
                  onClick={handleCopyLink}
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-r"
                >
                  Copy
                </button>
              </div>
              
              <button
                onClick={handleShare}
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
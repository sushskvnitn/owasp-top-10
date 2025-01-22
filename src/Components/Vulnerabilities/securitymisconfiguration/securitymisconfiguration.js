// src/SecurityMisconfiguration.js
import React, { useState } from 'react';

const SecurityMisconfiguration = () => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    setError(''); // Reset error state
    try {
      const response = await fetch(`http://localhost:5000/securitymisconfiguration/${username}`);
      const result = await response.json();
      
      if (response.ok) {
        setData(result);
      } else {
        setData(null);
        setError(result.error || 'An error occurred while fetching data.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Security Misconfiguration Example</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          className="mt-4 p-2 border border-gray-300 rounded w-full"
        />
        <button 
          onClick={fetchData} 
          className="mt-4 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Fetch User Data
        </button>
        {error && (
          <div className="mt-4 text-red-500">
            {error}
          </div>
        )}
        {data && (
          <div className="mt-4">
            <h2 className="text-xl">Response:</h2>
            <pre className="bg-gray-100 p-2 rounded border border-gray-300">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecurityMisconfiguration;
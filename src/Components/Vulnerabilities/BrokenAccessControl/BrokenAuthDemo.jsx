import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BrokenAuthDemo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [isSafeMode, setIsSafeMode] = useState(false); // State to toggle safe mode
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSafeMode 
      ? 'http://localhost:5000/brokenauthdemo' // Safe route for login
      : 'http://localhost:5000/dashboard'; // Unsafe broken auth route

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (data.Status === 200) {
        navigate('/dashboard'); // Navigate to dashboard if login is successful
      }
      setResponse(data.message || 'No response from the server');
    } catch (error) {
      setResponse('Error connecting to the server');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Broken Authentication Demo
        </h2>

        {/* Safe Mode Toggle Button */}
       

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Password"
            />
          </div>
          <button
          onClick={() => setIsSafeMode(!isSafeMode)}
          className="w-full bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600"
        >
          {isSafeMode ? 'Switch to Broken access Mode ' : 'Toggle Safe auth'}
        </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {response && (
          <div className="mt-6 bg-gray-100 p-4 rounded text-gray-800">
            <p><strong>Response:</strong> {response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrokenAuthDemo;

// src/components/SQLInjectionDemo.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SQLInjectionDemo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // State for password
  const [response, setResponse] = useState('');
  const [safeMode, setSafeMode] = useState(false); // State to toggle safe mode
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = safeMode
      ? 'http://localhost:5000/sql-injection-safe-demo'
      : 'http://localhost:5000/sql-injection-demo';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }), // Send both username and password
      });
      const data = await res.json();
      if (data.Status === 200) {
        navigate('/admin');
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
          SQL Injection Demo
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., admin' OR '1'='1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setSafeMode(!safeMode)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Toggle Safe Mode
          </button>
        </div>

        {safeMode && (
          <div className="mt-6 bg-gray-200 p-4 rounded text-gray-800">
            <h3 className="font-semibold text-lg text-blue-600">Mitigation Steps</h3>
            <p>
              <strong>How we're mitigating SQL injection:</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>We use parameterized queries to prevent SQL injection.</li>
              <li>Input values are treated as data and not executable code.</li>
              <li>We use prepared statements to safely handle user inputs.</li>
            </ul>
          </div>
        )}

        {response && (
          <div className="mt-6 bg-gray-100 p-4 rounded text-gray-800">
            <p><strong>Response:</strong> {response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SQLInjectionDemo;

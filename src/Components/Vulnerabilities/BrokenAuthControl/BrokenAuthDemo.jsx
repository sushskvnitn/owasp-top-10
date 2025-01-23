import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/brokenauthdemo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        navigate('/dashboard')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-4 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Broken Authentication Demonstration</h2>
        <p className="mb-4 text-sm text-gray-600">
          Vulnerabilities in authentication (login) systems can give attackers access to user accounts and even the ability
          to compromise an entire system using an admin account. For example, an attacker can take a list containing thousands
          of known username/password combinations obtained during a data breach and use a script to try all those combinations
          on a login system to see if there are any that work.
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Some strategies to mitigate authentication vulnerabilities are requiring two-factor authentication (2FA) as well as
          limiting or delaying repeated login attempts using rate limiting.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}

export default LoginPage;

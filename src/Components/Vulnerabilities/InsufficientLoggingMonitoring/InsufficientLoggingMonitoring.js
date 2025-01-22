import React, { useState } from "react";

const InsufficientLoggingMonitoring = () => {
  const [username, setUsername] = useState("");
  const [logs, setLogs] = useState([]);
  const [failedAttempts, setFailedAttempts] = useState(0);

  const handleLoginAttempt = () => {
    if (username.trim()) {
      // Simulate a login attempt
      const isSuccess = Math.random() > 0.5; // Randomly succeed or fail for demonstration

      if (isSuccess) {
        // Log successful login
        const newLog = `[${new Date().toISOString()}] INFO: User "${username}" logged in successfully.`;
        setLogs((prevLogs) => [...prevLogs, newLog]);
        alert(`Login successful for user: ${username}`);
      } else {
        // Log failed login attempt
        const newLog = `[${new Date().toISOString()}] WARNING: Failed login attempt for user "${username}".`;
        setLogs((prevLogs) => [...prevLogs, newLog]);
        setFailedAttempts((prev) => prev + 1);
        alert(`Login failed for user: ${username}`);
      }

      // Clear the input field
      setUsername("");
    } else {
      alert("Please enter a username.");
    }
  };

  const viewLogs = () => {
    // Simulate insufficient logging by showing only partial logs
    const insufficientLogs = [
      `[${new Date().toISOString()}] INFO: User logged in successfully.`,
      `[${new Date().toISOString()}] INFO: User logged out.`,
      // Example: Missing specific user details and failed attempts
    ];
    setLogs(insufficientLogs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Insufficient Logging & Monitoring
        </h1>
        <p className="text-gray-700 mb-6">
          This application demonstrates insufficient logging and monitoring practices. Key security events are not logged comprehensively, making it harder to detect or respond to incidents.
        </p>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleLoginAttempt}
          className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-600 transition duration-300"
        >
          Attempt Login
        </button>

        <button
          onClick={viewLogs}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          View Logs (Simulated)
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Logs:</h2>
          <div className="bg-gray-100 p-4 mt-2 rounded-lg h-40 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-gray-500">No logs available.</p>
            ) : (
              <ul className="list-disc pl-5 space-y-2">
                {logs.map((log, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {log}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Failed Login Attempts:{" "}
            <span className="text-red-600">{failedAttempts}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default InsufficientLoggingMonitoring;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const loggedInUser = localStorage.getItem('username');
    if (!loggedInUser) {
      setError('You are not authorized to view this page.');
      navigate('/BrokenAuthDemo'); // Redirect to the login page if not authenticated
    } else {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/BrokenAuthDemo');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Dashboard (Broken Authentication Demo)
        </h2>

        {error ? (
          <div className="mt-6 bg-red-100 p-4 rounded text-gray-800">
            <p><strong>Error:</strong> {error}</p>
            <p>It seems you don't have permission to access this area. Please check your credentials and try again.</p>
          </div>
        ) : (
          <div className="mt-6 bg-green-100 p-4 rounded text-gray-800">
            <p><strong>Welcome {user}!</strong></p>
            <p>This is a restricted area only accessible by authenticated users. 
              However, due to broken authentication, unauthorized users may gain access.</p>

            {/* Display some sample data */}
            <div className="mt-6 border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">User Profile</h3>
              <ul className="space-y-2">
                <li><strong>Username:</strong> {user}</li>
                <li><strong>Email:</strong> {user}@example.com</li> 
                <li><strong>Role:</strong> Admin</li> 
                <li><strong>Last Login:</strong> 12 hours ago</li>
              </ul>
            </div>

            <div className="mt-6 border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
              <ul className="space-y-2">
                <li>Logged in on 2024-12-31 at 10:00 AM</li>
                <li>Accessed user settings on 2025-01-01 at 09:00 AM</li>
                <li>Viewed order history on 2025-01-02 at 11:30 AM</li>
              </ul>
            </div>

            <p className="mt-6">
              As an authenticated user, you have access to sensitive information and controls. 
              Be cautious not to expose this data or perform actions that could compromise system security.
            </p>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>

            {/* Add a link to change password */}
            <div className="mt-6">
              <Link 
                to="/change-password" 
                className="text-blue-500 hover:text-blue-600 text-sm font-semibold"
              >
                Change Password
              </Link>
            </div>

            {/* Display some security tips */}
            <div className="mt-6 border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Security Tips</h3>
              <ul className="space-y-2">
                <li>Always use strong, unique passwords for each account.</li>
                <li>Enable two-factor authentication where possible.</li>
                <li>Be cautious about clicking on suspicious links or downloading attachments from unknown sources.</li>
                <li>Regularly update your software and plugins to patch security vulnerabilities.</li>
                <li>Be mindful of phishing attempts and avoid sharing sensitive information.</li>
              </ul>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Admin Dashboard</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome, Admin!</h2>
        <p className="text-gray-600 mb-6">
          This is a simulated admin panel accessed via SQL injection. Be cautious about securing your database and endpoints!
        </p>
        
        {/* SQL Injection Prevention Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <h3 className="font-semibold text-yellow-600">How to Prevent SQL Injection</h3>
          <p className="text-sm text-gray-600">
            SQL injection occurs when an attacker can manipulate a query by injecting malicious SQL code into an input field. 
            It is one of the most common web application security vulnerabilities.
          </p>
          <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
            <li>Use parameterized queries or prepared statements to safely handle user inputs.</li>
            <li>Always sanitize and validate user inputs before processing them.</li>
            <li>Use ORM frameworks that help prevent SQL injection attacks, such as Sequelize, Django ORM, or SQLAlchemy.</li>
            <li>Implement proper error handling to avoid exposing sensitive information through error messages.</li>
            <li>Use a web application firewall (WAF) to detect and block SQL injection attempts.</li>
            <li>Limit database user permissions to minimize the damage if an attack occurs.</li>
          </ul>
        </div>
        
        {/* Admin Panel Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-600">User Management</h3>
            <p className="text-sm text-gray-600">View, edit, or delete user accounts.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold text-green-600">Logs & Reports</h3>
            <p className="text-sm text-gray-600">Monitor system logs and activity reports.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-semibold text-red-600">Security Settings</h3>
            <p className="text-sm text-gray-600">Update passwords, roles, and access controls.</p>
          </div>
        </div>
        
        {/* Logout Button */}
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

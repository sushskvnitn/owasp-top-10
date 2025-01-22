import React, { useState } from "react";

const SensitiveDataExposure = () => {
  const [insecureData, setInsecureData] = useState([]);
  const [secureData, setSecureData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMitigation, setShowMitigation] = useState(false); // New state for toggling mitigation code

  const fetchInsecureData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/insecure-user-data");
      const data = await response.json();
      setInsecureData(data);
    } catch (error) {
      console.error("Error fetching insecure data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSecureData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/secure-user-data");
      const data = await response.json();
      setSecureData(data);
    } catch (error) {
      console.error("Error fetching secure data:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleMitigationCode = () => {
    setShowMitigation((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Sensitive Data Exposure Demo</h1>
      <p className="mb-4 text-gray-700">
        Web applications must protect sensitive data such as financial information and passwords. Attackers can exploit vulnerabilities to access this data, often through on-path attacks (man-in-the-middle attacks).
      </p>
      <p className="mb-4 text-gray-700">
        On-path attacks occur when an attacker intercepts communication between the client and server. Using HTTPS encrypts this data, ensuring sensitive information is protected during transmission.
      </p>
      <p className="mb-4 text-gray-700">
        To minimize data exposure risks, encrypt all sensitive data and disable caching of sensitive information. Developers should also avoid unnecessary storage of sensitive data.
      </p>
      <p className="mb-4 text-sm text-gray-500">
        <span className="italic">*Caching</span> temporarily stores data for reuse, which can pose risks if sensitive information is cached.
      </p>

      <div className="flex justify-center mb-6">
        <button
          onClick={fetchInsecureData}
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200 mr-4"
        >
          Fetch Insecure Data
        </button>
        <button
          onClick={fetchSecureData}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Fetch Secure Data
        </button>
      </div>

      {loading && <p className="text-blue-500 text-center">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Insecure Data */}
        <div className="border border-red-300 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-red-600">Insecure Data (HTTP)</h2>
          {insecureData.length > 0 ? (
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-red-100">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Username</th>
                  <th className="border border-gray-300 px-4 py-2">Password</th>
                </tr>
              </thead>
              <tbody>
                {insecureData.map((user) => (
                  <tr key={user.id} className="hover:bg-red-50">
                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No data available.</p>
          )}
        </div>

        {/* Secure Data */}
        <div className="border border-green-300 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-green-600">Secure Data (HTTPS)</h2>
          {secureData.length > 0 ? (
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-green-100">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Username</th>
                </tr>
              </thead>
              <tbody>
                {secureData.map((user) => (
                  <tr key={user.id} className="hover:bg-green-50">
                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No data available.</p>
          )}
        </div>
      </div>

      {/* Toggle Mitigation Code Section */}
      <div className="mt-6 text-center">
        <button
          onClick={toggleMitigationCode}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {showMitigation ? "Hide Mitigation Code" : "Show Mitigation Code"}
        </button>
      </div>

      {showMitigation && (
        <div className="mt-4 p-4 border border-blue-300 rounded-lg bg-blue-50">
          <h3 className="text-lg font-semibold text-blue-600">Mitigation Code Example</h3>
          <pre className="mt-2 bg-gray-100 p-4 rounded">
            {`
# Sensitive Data Exposure: Secure Endpoint
@app.route('/secure-user-data', methods=['GET'])
def secure_user_data():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT id, username FROM users")
    users = cursor.fetchall()
    connection.close()

    # Only exposing non-sensitive data
    user_data = [
        {"id": user[0], "username": user[1]} for user in users
    ]
    return jsonify(user_data), 200`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SensitiveDataExposure;
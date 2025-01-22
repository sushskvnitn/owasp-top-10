import React, { useState } from 'react';

function XMLExternalEntities() {
  const [xmlData, setXmlData] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Handle XML input change
  const handleXmlChange = (e) => {
    setXmlData(e.target.value);
  };

  // Handle form submission (sending XML to the backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:5000/xxe-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: xmlData,
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data);
        setError(null);
      } else {
        const errorData = await res.json();
        setError(errorData.error);
        setResponse(null);
      }
    } catch (err) {
      setError('An error occurred while sending the request.');
      setResponse(null);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">XML External Entity (XXE) Demo</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <form onSubmit={handleSubmit}>
          <label className="block text-lg font-medium mb-2">
            Enter XML Data:
            <textarea
              className="mt-2 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={xmlData}
              onChange={handleXmlChange}
              rows="10"
              placeholder="Enter XML data here..."
            />
          </label>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Send XML
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md">
            <h2 className="text-lg font-bold mb-2">Response:</h2>
            <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-md">
            <h2 className="text-lg font-bold mb-2">Error:</h2>
            <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
              {error}
            </pre>
          </div>
        )}

        <div className="mt-8 bg-yellow-100 p-4 border border-yellow-300 rounded-md">
          <h2 className="text-lg font-bold mb-2">What is XXE Vulnerability?</h2>
          <p className="mb-2">
            XML External Entity (XXE) is a vulnerability that allows an attacker to interfere with the processing of XML data.
            This can result in the disclosure of sensitive data, server-side request forgery (SSRF), or denial of service (DoS).
          </p>
          <h3 className="text-md font-semibold mb-1">How to Mitigate XXE?</h3>
          <ul className="list-disc pl-5">
            <li>Disable external entity processing in the XML parser.</li>
            <li>Use secure libraries and parsers that do not support external entities by default.</li>
            <li>Validate and sanitize XML input before processing.</li>
            <li>Avoid using DTDs (Document Type Definitions) unless absolutely necessary.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default XMLExternalEntities;

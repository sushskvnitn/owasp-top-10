import React from 'react';

const Vulnerabilities = [
  {
    title: "Injection",
    description: "Prevent SQL injection and other command injection attacks by sanitizing inputs.",
  },
  {
    title: "Broken Authentication",
    description: "Implement strong authentication mechanisms and session management.",
  },
  {
    title: "Sensitive Data Exposure",
    description: "Encrypt sensitive data both in transit and at rest.",
  },
  {
    title: "XML External Entities (XXE)",
    description: "Configure XML parsers securely to avoid XML-based attacks.",
  },
  {
    title: "Broken Access Control",
    description: "Ensure proper access control for user roles and data access.",
  },
  {
    title: "Security Misconfiguration",
    description: "Disable unnecessary services and configure security settings properly.",
  },
  {
    title: "Cross-Site Scripting (XSS)",
    description: "Sanitize user inputs to prevent malicious scripts from executing.",
  },
  {
    title: "Insecure Deserialization",
    description: "Avoid deserializing untrusted data to prevent code execution.",
  },
  {
    title: "Using Components with Known Vulnerabilities",
    description: "Keep third-party libraries up to date and secure.",
  },
  {
    title: "Insufficient Logging & Monitoring",
    description: "Implement proper logging and monitoring to detect and respond to attacks.",
  },
];

function Home() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-6"
      style={{
        backgroundImage: 'linear-gradient(to right top, #16006e, #340073, #490078, #5d007d, #6f0081, #6f0984, #6f1186, #6f1789, #5c208a, #47258a, #2e2988, #002b85)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <div className="rounded-lg p-8 w-full max-w-3xl bg-white shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
          Welcome to the OWASP Top 10 Vulnerabilities Project
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Learn about the most common security vulnerabilities in web applications, their real-world examples, and how to mitigate them effectively.
        </p>
        <div className="mb-6">
          <a
            href="/"
            className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition duration-300"
          >
            Start Learning
          </a>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
            <li>Real-world examples of the OWASP Top 10 vulnerabilities</li>
            <li>Detailed mitigation techniques for each vulnerability</li>
            <li>Best practices for securing web applications</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-md">
  <h2 className="text-xl font-bold text-gray-800 mb-4">OWASP Top 10 Vulnerabilities</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Vulnerabilities.map((vuln, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
      >
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800">{vuln.title}</h3>
        </div>
        <div
          className="bg-cover bg-center h-48 rounded-md mt-2"
          style={{
            backgroundImage: "url('https://t4.ftcdn.net/jpg/02/67/40/21/360_F_267402109_jZvsqRQUvSxohAOmcUt549jlapqoRHM0.jpg')",
          }}
        />
        <div className="mt-4">
          <p className="text-sm text-gray-600 mt-2">{vuln.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-400 to-pink-600 flex flex-col justify-center items-center p-6">
      <div className="rounded-xl shadow-lg w-full max-w-4xl bg-white p-8 relative overflow-hidden">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Welcome to the OWASP Top 10 Vulnerabilities Project
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          Explore the most common security vulnerabilities in web applications,
          their real-world examples, and effective mitigation techniques.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/OwaspTop10"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Start Exploring
          </Link>
          <a
            href="https://github.com/sushskvnitn/owasp-top-10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            GitHub Code
          </a>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md mt-12 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          OWASP Top 10 Vulnerabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Vulnerabilities.map((vuln, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url('https://t4.ftcdn.net/jpg/02/67/40/21/360_F_267402109_jZvsqRQUvSxohAOmcUt549jlapqoRHM0.jpg')",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {vuln.title}
                </h3>
                <p className="text-sm text-gray-700">{vuln.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const owaspData = [
  {
    id: 1,
    name: 'Injection',
    description: 'Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query.',
    imageUrl: 'https://i.postimg.cc/TYhkDzTf/freepik-the-style-is-candid-image-photography-with-natural-2939.jpg',
    demoLink: '/sqlinjection',
  },
  {
    id: 2,
    name: 'Broken Authentication',
    description: 'Broken Authentication allows attackers to compromise user accounts, often due to poorly implemented authentication mechanisms.',
    imageUrl: 'https://i.postimg.cc/Y2mSX9rP/freepik-the-style-is-candid-image-photography-with-natural-2940.jpg',
    demoLink: '/BrokenAuthDemo',
  },
  {
    id: 3,
    name: 'Sensitive Data Exposure',
    description: 'Sensitive Data Exposure occurs when applications fail to protect sensitive information such as passwords, credit cards, and personal details.',
    imageUrl: 'https://i.postimg.cc/nhdsyP6S/freepik-the-style-is-candid-image-photography-with-natural-2941.jpg',
    demoLink: '/SensitiveDataExposure',
  },
  {
    id: 4,
    name: 'XML External Entities (XXE)',
    description: 'XXE flaws occur when XML input containing a reference to an external entity is processed by a weakly configured XML parser.',
    imageUrl: 'https://i.postimg.cc/Fzp4q27T/freepik-the-style-is-candid-image-photography-with-natural-2942.jpg',
    demoLink: '/XMLExternalEntities',
  },
  {
    id: 5,
    name: 'Broken Access Control',
    description: 'Broken Access Control occurs when an application does not properly enforce user permissions or restrict access to sensitive resources.',
    imageUrl: 'https://i.postimg.cc/pd0nP0yr/8e5b7749-3d1a-4833-84c5-e49c2ed152dd.png',
    demoLink: '/BrokenAccessControl',
  },
  {
    id: 6,
    name: 'Security Misconfiguration',
    description: 'Security Misconfiguration happens when security settings are improperly configured or missing, making systems vulnerable.',
    imageUrl: 'https://i.postimg.cc/hvTsYFsN/freepik-the-style-is-candid-image-photography-with-natural-2943.jpg',
    demoLink: '/security-misconfiguration-demo',
  },
  {
    id: 7,
    name: 'Cross-Site Scripting (XSS)',
    description: 'XSS flaws occur when an application includes untrusted data on a web page without proper validation or escaping.',
    imageUrl: 'https://i.postimg.cc/Kc7xL1rr/64e6e4cc-d294-4695-b339-fecde962a7d9.png',
    demoLink: '/xss-demo',
  },
  {
    id: 8,
    name: 'Insecure Deserialization',
    description: 'Insecure Deserialization occurs when attackers exploit unsafe deserialization of data to execute malicious code or manipulate the data.',
    imageUrl: 'https://i.postimg.cc/sD2qXxn2/6b20c437-f2c3-4168-a292-825bc1ad6c45.png',
    demoLink: '/InsecureDeserialization',
  },
  {
    id: 9,
    name: 'Using Components with Known Vulnerabilities',
    description: 'Using Components with Known Vulnerabilities occurs when applications use components (libraries, frameworks, etc.) with known security flaws.',
    imageUrl: 'https://i.postimg.cc/rssBvw3z/Designer.jpg',
    demoLink: '/known-vulnerabilities-demo',
  },
  {
    id: 10,
    name: 'Insufficient Logging & Monitoring',
    description: 'Insufficient Logging & Monitoring means an application does not log enough data or monitor events to detect or respond to security incidents.',
    imageUrl: 'https://i.postimg.cc/JhJZ53hz/Designer-1.jpg',
    demoLink: '/insufficient-logging-demo',
  },
];

const OwaspTop10 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">OWASP Top 10 Vulnerabilities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {owaspData.map((vuln) => (
          <div key={vuln.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={vuln.imageUrl} alt={vuln.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{vuln.name}</h3>
              <p className="text-gray-600 mt-2">{vuln.description}</p>
              <Link
                to={vuln.demoLink}
                className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Explore Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwaspTop10;

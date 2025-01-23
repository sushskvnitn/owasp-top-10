

# OWASP Top 10 Vulnerability Demo

This project demonstrates the **OWASP Top 10 vulnerabilities** in web applications, with a focus on real-world scenarios and effective mitigation techniques. The goal of this project is to raise awareness about these security risks and help developers implement best practices to build secure applications.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [OWASP Top 10 Vulnerabilities](#owasp-top-10-vulnerabilities)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The **OWASP Top 10** is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.  
This project showcases three demonstration modules that illustrate the vulnerabilities and how to mitigate them using **React.js** and **Python Flask**.

---

## Features

- Detailed explanations of the **OWASP Top 10 vulnerabilities**.
- Real-world examples for each vulnerability.
- Interactive UI for navigating through the vulnerabilities.
- Practical mitigation techniques to secure your web applications.
- Code repository for exploring the implementation.

---

## Technologies Used

- **Frontend**: [React.js](https://reactjs.org/)  
- **Backend**: [Python Flask](https://flask.palletsprojects.com/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Deployment**: (e.g., Vercel, AWS, or any hosting platform you use – update if applicable)

---

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sushskvnitn/owasp-top-10.git
   cd owasp-top-10
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. **Run the Backend Server**:
   ```bash
   flask run
   ```

5. **Run the Frontend**:
   ```bash
   cd ../frontend
   npm start
   ```

6. Open your browser and visit: `http://localhost:3000`.

---

## Usage

1. Explore the **OWASP Top 10 vulnerabilities** through an interactive UI.
2. View detailed descriptions and real-world examples of each vulnerability.
3. Learn effective mitigation techniques for secure application development.
4. Access the GitHub repository for implementation details and source code.

---

## OWASP Top 10 Vulnerabilities

This project covers the following vulnerabilities:

1. **Injection**: Prevent SQL and command injection attacks by sanitizing inputs.
2. **Broken Authentication**: Implement strong authentication mechanisms and session management.
3. **Sensitive Data Exposure**: Encrypt sensitive data both in transit and at rest.
4. **XML External Entities (XXE)**: Securely configure XML parsers to prevent XXE attacks.
5. **Broken Access Control**: Enforce proper access controls for user roles and data.
6. **Security Misconfiguration**: Harden security settings and disable unnecessary services.
7. **Cross-Site Scripting (XSS)**: Sanitize user inputs to prevent malicious script execution.
8. **Insecure Deserialization**: Avoid deserializing untrusted data to prevent code execution.
9. **Using Components with Known Vulnerabilities**: Keep dependencies up to date and secure.
10. **Insufficient Logging & Monitoring**: Implement proper logging and monitoring to detect attacks.

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push your branch to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [OWASP Foundation](https://owasp.org/) for providing the **OWASP Top 10** list.
- [React.js](https://reactjs.org/) and [Python Flask](https://flask.palletsprojects.com/) for making this project possible.
- [Tailwind CSS](https://tailwindcss.com/) for simplifying styling.

---

### Demo

 ![image](https://github.com/user-attachments/assets/c4950a4d-92e7-4135-95e1-106f65a499c7)


---

For more details, visit the [GitHub Repository](https://github.com/sushskvnitn/owasp-top-10).



### Key Points:
- **Installation**: Clear step-by-step instructions for setting up the project.  
- **Features**: A brief list of what the project provides.  
- **Acknowledgements**: Credit to relevant tools and frameworks.  
- **Demo**: Placeholder for screenshots or hosted links to showcase the app.  

Let me know if you'd like further refinements or additional sections!

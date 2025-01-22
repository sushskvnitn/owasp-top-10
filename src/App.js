import './App.css';
import Header from './Components/Utils/Header.jsx';
import Home from './Components/Pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Pages/Error404.jsx"
import SQLInjection from './Components/Vulnerabilities/Injection/Sqlinjection.jsx';
import AdminDashboard from './Components/Vulnerabilities/Injection/Admin.jsx';
import Footer from './Components/Utils/Footer.jsx';
import OwaspTop10 from './Components/Pages/Owasp-top-10.jsx'
import BrokenAuthDemo from './Components/Vulnerabilities/BrokenAuthControl/BrokenAuthDemo.jsx'
import Dashboard from './Components/Vulnerabilities/BrokenAuthControl/DashBoard.jsx';
import SensitiveDataExposure from './Components/Vulnerabilities/SensitiveDataExposure/SensitiveDataExposure.js'
import XSSDemo from "./Components/Vulnerabilities/Xss/Xss.js"
import InsecureDeserialization from "./Components/Vulnerabilities/InsecureDeserialization/InsecureDeserialization.js"
import BrokenAccessControl from './Components/Vulnerabilities/BrokenAccessControl/BrokenAccessControl.js';
import XMLExternalEntities from './Components/Vulnerabilities/XMLExternalEntities(XXE)/XMLExternalEntities.jsx'
import SecurityMisconfiguration from './Components/Vulnerabilities/securitymisconfiguration/securitymisconfiguration.js'
import ComponentswithKnownVulnerability from './Components/Vulnerabilities/ComponentswithKnownVulnerability/ComponentswithKnownVulnerability.js'
import InsufficientLoggingMonitoring from './Components/Vulnerabilities/InsufficientLoggingMonitoring/InsufficientLoggingMonitoring.js'
import About from './Components/Pages/About.jsx'
import Darkmode from './Components/Utils/Darkmode.js'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sqlinjection" element={<SQLInjection />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/OwaspTop10" element={<OwaspTop10/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/BrokenAuthDemo" element={<BrokenAuthDemo/>}/>
          <Route path="/SensitiveDataExposure" element={<SensitiveDataExposure/>}/>
          <Route path="/InsecureDeserialization" element={<InsecureDeserialization/>}/>
          <Route path="/BrokenAccessControl" element={<BrokenAccessControl/>}/>
          <Route path="/XMLExternalEntities" element={<XMLExternalEntities/>}/>
          <Route path="/SecurityMisconfiguration" element={<SecurityMisconfiguration/>}/>
          <Route path="/ComponentswithKnownVulnerability" element={<ComponentswithKnownVulnerability/>}/>
          <Route path="/InsufficientLoggingMonitoring" element={<InsufficientLoggingMonitoring/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/xss-demo" element={<XSSDemo/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Darkmode/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
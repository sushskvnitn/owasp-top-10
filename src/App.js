import './App.css';
import Header from './Components/Utils/Header.jsx';
import Home from './Components/Pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Pages/Error404.jsx"
import SQLInjection from './Components/Vulnerabilities/Injection/Sqlinjection.jsx';
import AdminDashboard from './Components/Vulnerabilities/Injection/Admin.jsx';
import Footer from './Components/Utils/Footer.jsx';
import OwaspTop10 from './Components/Pages/Owasp-top-10.jsx'
import BrokenAuthDemo from './Components/Vulnerabilities/BrokenAccessControl/BrokenAuthDemo.jsx'
import Dashboard from './Components/Vulnerabilities/BrokenAccessControl/DashBoard.jsx';
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
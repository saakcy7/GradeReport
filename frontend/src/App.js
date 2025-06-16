import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthForm from './pages/auth';
import StudentList from './components/StudentList';
import AddStudent from './pages/AddStudent';
import Dashboard from './pages/Dashboard';
import ReportCard from './pages/ReportCard';
import CheckResults from './pages/CheckResults'; // Optional if used in a page
import AddResult from './pages/AddResult'; // Optional if used in a page
// import ReportCard from './components/ReportCard'; // Optional if used in a page
import About from './pages/about'; // Optional if used in a page
import Contact from './pages/contact'; // Optional if used in a page

function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList/>}/>
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/add-result" element={<AddResult/>} />
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/getresults" element={<CheckResults/>}/>
        <Route path="/getreport" element={<ReportCard />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        

        
        {/* You can add a ReportCard page like: */}
        {/* <Route path="/report/:studentId" element={<ReportCard />} /> */}
      </Routes>
    </div>
  );
}

export default App;

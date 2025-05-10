import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthForm from './pages/auth';
import StudentList from './components/StudentList';
// import ReportCard from './components/ReportCard'; // Optional if used in a page

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList/>}/>
        <Route path="/add-student" element={<div>Add Student</div>} />
        <Route path="/add-result" element={<div>Add Result</div>} />
        <Route path="/login" element={<AuthForm/>}/>
        
        {/* You can add a ReportCard page like: */}
        {/* <Route path="/report/:studentId" element={<ReportCard />} /> */}
      </Routes>
    </div>
  );
}

export default App;

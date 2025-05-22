import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthForm from './pages/auth';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import Dashboard from './pages/Dashboard';
// import ReportCard from './components/ReportCard'; // Optional if used in a page

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList/>}/>
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/add-result" element={<div>Add Result</div>} />
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
        {/* You can add a ReportCard page like: */}
        {/* <Route path="/report/:studentId" element={<ReportCard />} /> */}
      </Routes>
    </div>
  );
}

export default App;

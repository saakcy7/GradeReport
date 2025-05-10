import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import ReportCard from './components/ReportCard'; // Optional if used in a page

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* You can add a ReportCard page like: */}
        {/* <Route path="/report/:studentId" element={<ReportCard />} /> */}
      </Routes>
    </div>
  );
}

export default App;

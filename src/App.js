// import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import FindSuppliers from './components/FindSuppliers';
import FindServiceTags from './components/FindServiceTags'; 
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} ></Route>
          <Route path="/findsuppliers" element={<FindSuppliers />} ></Route>
          <Route path="/findservices" element={<FindServiceTags />} ></Route>
          <Route path="/Login" element={<Login />} ></Route>

        </Routes>
    </Router>
  );
}

export default App;

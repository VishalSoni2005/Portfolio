import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Layout/Layout';
import About from './pages/02_About';
import Blog from './pages/03_Blog';
import Contact from './pages/04_Contact';
import Dashboard from './pages/05_Dashboard';
import Header from './Layout/00_Header';
import Footer from './Layout/06_SocialLinks';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

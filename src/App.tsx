import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';
import Skills from './pages/Skills.tsx';
import Resources from './pages/Resources.tsx';
import DeveloperSetup from './pages/DeveloperSetup.tsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/developer-setup" element={<DeveloperSetup />} />
      </Routes>
    </Router>
  );
}

export default App;

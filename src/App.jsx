import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"; 
import Agence from './pages/Agence';
import Projects from './pages/Project';

const App = () => {
  return (
    <>
    <div className=' text-white'>
      
    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/agence" element={<Agence />} /> 
        <Route path="/projects" element={<Projects />} />  
      </Routes>
    
    </div>
    </>
  );
}

export default App;

// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail'; // Ensure this import is present
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <div className="container my-4">
              <Home />
            </div>
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <div className="container my-4">
              <About />
            </div>
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Navbar />
            <div className="container my-4">
              <Projects />
            </div>
            <Footer />
          </>
        } />
        <Route path="/projects/:id" element={
          <>
            <Navbar />
            <div className="container my-4">
              <ProjectDetail />
            </div>
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <div className="container my-4">
              <Contact />
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./components"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>

    </BrowserRouter>
  );
}

export default App;

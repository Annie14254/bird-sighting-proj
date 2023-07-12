import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// imports wouldn't work when imported as a group?? try to resolve later
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Header from "./components/Header"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <Header/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>

    </BrowserRouter>
  );
}

export default App;

// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default App;

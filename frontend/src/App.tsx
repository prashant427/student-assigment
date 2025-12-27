import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:user" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

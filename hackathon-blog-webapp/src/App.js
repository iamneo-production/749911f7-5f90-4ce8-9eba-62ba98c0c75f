import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'

const App = () => (
  <Router>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  </Router>
)

export default App

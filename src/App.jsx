import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css';
import React from "react"
import Home from "./Home"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

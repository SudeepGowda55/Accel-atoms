import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home.jsx'

export default function App() {
  return (
    <div>
      <Routes>
           <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}


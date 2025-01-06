
import Home from '../components/Home'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

import Register from '../components/Register'
import Student from '../components/Student'
import './App.css'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/student" element={<Student />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Login />} />
    </Routes>
  

    </>
  )
}

export default App

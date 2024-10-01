import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Auth/Login/Login";
import Signup from "./Auth/SignUp/Signup";
const App = () => {
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
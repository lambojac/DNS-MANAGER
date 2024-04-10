import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from './Component/Login/LoginForm';
import SignupForm from './Component/Signup/SignupForm';
import About from './Component/About/About';
import useAuth from "./hooks/useAuth";
function App(){
  const { isAuthenticated } = useAuth(); // Get authentication state

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!isAuthenticated? <LoginForm/> : <Navigate to="/about" replace/>}
          />
          <Route
            path="/signup"
            element={!isAuthenticated? <SignupForm/> : <Navigate to="/about" replace/>}
          />
          <Route
            path="/about"
            element={isAuthenticated? <About/> : <Navigate to="/login"/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
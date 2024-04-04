import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginForm from './Component/Login/LoginForm';
import SignupForm from './Component/Signup/SignupForm';
import About from './Component/About/About';

function App(){
return(
<>
<BrowserRouter>
<Routes>
  <Route path="/signup" element={<SignupForm/>}/>
  <Route path="/login" element={<LoginForm/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
</BrowserRouter>
</>
)
  
}

export default App;
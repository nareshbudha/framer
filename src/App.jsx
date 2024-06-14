import { useState, react } from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Personalinfo from "./Components/Form/Personalinfo";
import Calendar from "./Components/Form/Calendars";
import Homepage from "./Components/Pages/Homepage";
import SignUp from "./Components/Pages/Signup";
import Login from "./Components/Pages/Login";
import Footer from "./Components/Footer";


function App() {
 
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Personalinfo" element={<Personalinfo/>} />
          <Route path="/login" element={<Login/>} />
           {/* <Route path="/SignUp" element={<SignUp/>} /> */}

          <Route path="/dashboard" element={<Dashboard/>} />
          
         
        </Routes>
       
      </BrowserRouter>
 
   
   
      
    </>
  );
}

export default App;

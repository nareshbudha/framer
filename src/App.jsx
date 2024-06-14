import { useState, react } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Personalinfo from "./Components/Form/Personalinfo";

import Homepage from "./Components/Pages/Homepage";

import Login from "./Components/Pages/Login";

import Layout from "./Layout/Layout";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={  <Layout>
              <Homepage />
            </Layout>}>
          </Route>
          <Route path="/Home" element={<Homepage />} /> 
          <Route path="/Personalinfo" element={<Personalinfo />} />
           <Route path="/login" element={<Login />} /> 
          {/* <Route path="/SignUp" element={<SignUp/> }/> */}
        
          
          <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

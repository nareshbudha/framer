 import { useState, react } from "react"; import "./App.css";
 import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Components/Pages/Homepage";

import Login from "./Components/Pages/Login";

 import Layout from "./Layout/Layout";
import Dashboard from "./Components/Dashboard";
import Bar from '../src/Components/Bar'

import Personalinfo from "./Components/Farmer/Form/Personalinfo";
import FarmerAddress from "./Components/Farmer/Form/FarmerAddress";
import Family from '../src/Components/Farmer/Form/Family'
import Search from "./Components/Farmer/Search/Search";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
           />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Personinfo" element={<Personalinfo />} />
           <Route path="/Family" element={<Family/>} />
          <Route path="/Farmeraddress" element={<FarmerAddress/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Search" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

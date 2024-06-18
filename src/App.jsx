 import { useState, react } from "react"; import "./App.css";
 import { BrowserRouter, Routes, Route } from "react-router-dom";



 import Layout from "./Layout/Layout";
import Dashboard from "./Components/Dashboard";
import Bar from '../src/Components/Bar'
import Landdetail from "./Components/Farmer/Form/Landdetail";
import Irrigationdetail from "./Components/Farmer/Form/Irrigationdetail";
import Homepage from "./Components/Pages/Homepage";
import Login from "./Components/Pages/Login";
import Personalinfo from "./Components/Farmer/Form/Personalinfo";
import Cropproduction from "./Components/Farmer/Form/Cropproduction";
import Farmerinfo from "./Components/Farmer/Farmerinformation";
import Familydetail from "./Components/Farmer/Form/Familydetail";
import Farmeraddress from "./Components/Farmer/Form/Farmeraddress";
import Agriculturefarmregistertion from "./Components/Farmer/Form/Agriculturefarmregi";
import Documentsection from "./Components/Farmer/Form/Documentsection";
import Aboutus from "./Components/Pages/Aboutus";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage/>
              </Layout>
            }
           />
           <Route
            path="/about-us"
            element={
              <Layout>
                <Aboutus/>
              </Layout>
            }
           />
          <Route path="/login" element={<Login/>} />
          <Route path="/add/personal-info" element={<Personalinfo/>} />
           <Route path="/add/family-detail" element={<Familydetail />} />
          <Route path="/add/farmer-address" element={<Farmeraddress/>} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
           <Route path="/farmer-informtion" element={<Farmerinfo/>} />
          <Route path="/add/land-detail" element={<Landdetail/>}/>
          <Route path="/add/irrigation-detail"  element={<Irrigationdetail/>}/>
          <Route path="/farmer/register" element={<Agriculturefarmregistertion/>}/>
          <Route path="/crop/production/and/market-management" element={<Cropproduction/>}/> 
          <Route path="/document/upload-section" element ={<Documentsection/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

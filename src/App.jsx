import { useState, react } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Components/DashboardLayout/Dashboard";
import Bar from "./Components/common/Bar";
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
import Test from "./Components/Farmer/Form/Test";
import News from "./Components/Pages/News";
import Dashboardlayout from "./Components/DashboardLayout/Dashboardlayout";

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
          <Route
            path="/about-us"
            element={
              <Layout>
                <Aboutus />
              </Layout>
            }
          />
          <Route
            path="/news"
            element={
              <Layout>
                <News />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <Dashboardlayout>
                <Dashboard />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/farmer-information"
            element={
              <Dashboardlayout>
                <Farmerinfo />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/personal-info"
            element={
              <Dashboardlayout>
                <Personalinfo />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/farmer-address"
            element={
              <Dashboardlayout>
                <Farmeraddress />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/family-detail"
            element={
              <Dashboardlayout>
                <Familydetail />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/land-detail"
            element={
              <Dashboardlayout>
                <Landdetail />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/irrigation-detail"
            element={
              <Dashboardlayout>
                <Irrigationdetail />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/farmer/register"
            element={
              <Dashboardlayout>
                <Agriculturefarmregistertion />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/crop/production/and/market-management"
            element={
              <Dashboardlayout>
                <Cropproduction />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/document/upload-section"
            element={
              <Dashboardlayout>
                <Documentsection />
              </Dashboardlayout>
            }
          />

          <Route path="/test" element={<Test />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

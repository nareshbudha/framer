import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./WebView/Layout/Layout";
import Dashboard from "./Dashboard/DashboardView/Dashboard";
import AddLandDetail from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/AddLandDetail";
import AddIrrigationDetail from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/AddIrrigationDetail";
import Homepage from "./WebView/View/HomePage/Homepage";
import Login from "./WebView/View/Login/Login";
import AddPersonalInformation from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/AddPersonalInformation";
import AddCropproductionDetail from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/AddCropproductionDetail";
import FarmerInformation from "./Dashboard/DashboardView/Farmer/FarmerInformation/Farmerinformation";
import AddFamilyDetail from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/AddFamilyDetail";
import AddFarmerAddress from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/AddFarmerAddress";
import Documentsection from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/Documentsection";
import AboutUs from "./WebView/View/AboutUs/Aboutus";
import Notice from "./WebView/View/Notice/Notice";
import Dashboardlayout from "./Dashboard/DashboardLayout/Dashboardlayout";
import Wardone from "./Dashboard/DashboardView/Wardwisedata/Wardone";
import AddAgricultureFarmDetail from "./Dashboard/DashboardView/Farmer/Add-Farmer-information/AddAgriculturefarmDetail";
import Slider from './WebView/Components/Slider'
import Map from './WebView/Map/WardMap'
import CropSelection from './Dashboard/DashboardView/Farmer/CropsType/CropsSelection' 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Dashboard Routes */}
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
                <FarmerInformation/>
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/add-personal-info"
            element={
              <Dashboardlayout>
                <AddPersonalInformation />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/add-farmer-address"
            element={
              <Dashboardlayout>
                <AddFarmerAddress />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/add-family-detail"
            element={
              <Dashboardlayout>
                <AddFamilyDetail/>
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/add-land-detail"
            element={
              <Dashboardlayout>
                <AddLandDetail />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/add-irrigation-detail"
            element={
              <Dashboardlayout>
                <AddIrrigationDetail />
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/add-farmer/register"
            element={
              <Dashboardlayout>
                <AddAgricultureFarmDetail/>
              </Dashboardlayout>
            }
          />
          <Route
            path="/admin/add/crop/production/and/market-management"
            element={
              <Dashboardlayout>
                <AddCropproductionDetail />
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
            <Route
            path="/one"
            element={
              <Dashboardlayout>
                <Wardone/>
              </Dashboardlayout>
            }
          />
            <Route
            path="/one"
            element={
              <Dashboardlayout>
                <Wardone/>
              </Dashboardlayout>
            }
          />
            <Route
            path="/add-cropselection"
            element={
              <Dashboardlayout>
                <CropSelection/>
              </Dashboardlayout>
            }
          />

                    {/* WebView Routes */}
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
                                <AboutUs />
                            </Layout>
                        }
                    />
                    <Route
                        path="/admin-register"
                        element={
                            <Layout>
                                <AdminRegister />
                            </Layout>
                        }
                    />
                    <Route
                        path="/news"
                        element={
                            <Layout>
                                <Notice />
                            </Layout>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Layout>
                                <Login />
                            </Layout>
                        }
                    />

          {/* WebView Routes */}
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
                <AboutUs />
              </Layout>
            }
          />
  
          <Route
            path="/news"
            element={
              <Layout>
                <Notice />
              </Layout>
            }
          />
              <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
              {/* <Route
            path="/map"
            element={
              <Layout>
                <Map />
              </Layout>
            }
          /> */}
         
        
          
          <Route path="/slider" element={< Slider/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

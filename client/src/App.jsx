import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './components/common/Layout';
import Home from './Pages/Home';
import NotFound from "./Pages/NotFound"
import Publish from './Pages/Publish';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import ProfilePage from './Pages/Profile';
import BrowsePage from "./Pages/Browse"
import { useState } from "react"
import  DashboardPage from "./Pages/Dashboard/DashboardPage"
import AnalyticsPage from "./Pages/Dashboard/AnalyticsPage"
import UsersPage from "./Pages/Dashboard/UsersPage"
import SettingsPage from "./Pages/Dashboard/SettingsPage"
import DashboardLayout from './components/Dashboard/common/DashboardLayout';
function App() {
  const [showTermsAndConditions, setShowTermsAndConditions] = useState(null)
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  return (
    <>
<Routes>
  <Route path="/" element={<Layout 
  setShowCookieConsent={setShowCookieConsent}
   setShowTermsAndConditions={ setShowTermsAndConditions}/>}>
<Route index element={<Home 
showCookieConsent={showCookieConsent}
setShowCookieConsent={setShowCookieConsent}
showTermsAndConditions={showTermsAndConditions} setShowTermsAndConditions={setShowTermsAndConditions}/>} />
<Route path="publish" element={<Publish />} />
<Route path="profile" element={< ProfilePage/>}/>
<Route path="browse" element={< BrowsePage/>}/>
  </Route>
  <Route path="login" element={<LoginPage />} />
  <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />}/>
          <Route path="analytics" element={<AnalyticsPage/>}/>
          <Route path="users" element={<UsersPage/>}/>
          <Route path="settings" element={<SettingsPage/>}/>
        </Route>

<Route path="register" element={<RegisterPage />} />
  <Route  path="*" element={<NotFound/>}/>
</Routes>
    </>
  )
}

export default App

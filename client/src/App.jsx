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
function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Layout/>}>
<Route index element={<Home />} />
<Route path="publish" element={<Publish />} />
<Route path="profile" element={< ProfilePage/>}/>
<Route path="browse" element={< BrowsePage/>}/>
  </Route>
  <Route path="login" element={<LoginPage />} />
<Route path="register" element={<RegisterPage />} />
  <Route  path="*" element={<NotFound/>}/>
</Routes>
    </>
  )
}

export default App

import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <NavBar /> 
    <Outlet />
<Footer />
    </>
  )
}
export default Layout
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Layout = ({setShowTermsAndConditions, setShowCookieConsent}) => {
  return (
    <>
    <NavBar /> 
    <Outlet  />
<Footer setShowTermsAndConditions={setShowTermsAndConditions} setShowCookieContent={setShowCookieConsent}/>
    </>
  )
}
export default Layout
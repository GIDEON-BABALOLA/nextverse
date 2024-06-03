import "../../styles/components/common/navbar.css"
import {  Link } from 'react-router-dom'
const NavBar = () => {
  return (
<>
<header className="navbar-header">
    <nav className="navbar-nav-navbar">
      
      <div className="navbar-logo">
        <Link to="/" className="navbar-header-links">Lite Note</Link>
      </div>
      
      <div className="navbar-nav-links">
      <Link to="/" className="navbar-header-links navbar-active">
        Home
        </Link>
        <Link to="/publish" className="navbar-header-links">
        Publish
        </Link>
        <Link to="/browse" className="navbar-header-links">
        Browse
        </Link>
        <Link to="/profile" className="navbar-header-links">
        Profile
        </Link>
     
      </div>
    </nav>
  </header>

</>
  )
}

export default NavBar
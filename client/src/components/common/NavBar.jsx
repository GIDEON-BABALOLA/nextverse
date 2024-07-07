import "../../styles/components/common/navbar.css"
import {  Link } from 'react-router-dom'
import Headroom from "react-headroom"
import avatar from "../../assets/29.jpg"
import ContextMenu from "./ContextMenu"
import { MdGridView, MdLogout, MdSettings, MdClose }from "react-icons/md"
import { useState, useEffect } from "react"
import useWindowSize from "../../hooks/useWindowSize"
const NavBar = () => {
  const {width, height} = useWindowSize()
  const [contextMenu, setContextMenu] = useState()
  const showLoggedInUserOptions = (e) => {
    updateMenuPosition(e.clientX, e.clientY + 30)
contextMenu.current.style.visibility = "visible"
  }
  const updateMenuPosition = (x, y) => {
    const maxTopValue = height - contextMenu.current.offsetHeight;
    const maxLeftValue = width - contextMenu.current.offsetWidth; 
    contextMenu.current.style.left = `${Math.min(maxLeftValue, x)}px`;
    contextMenu.current.style.top = `${Math.min(maxTopValue, y)}px`; 
      };
      useEffect(() => {
        if (contextMenu) {
          window.addEventListener('scroll', () => {
            contextMenu.current.style.visibility = "hidden";
          });
        }
    
        return () => {
          if (contextMenu) {
            window.removeEventListener('scroll', () => {
              contextMenu.current.style.visibility = "hidden";
            });
          }
        };
      }, [contextMenu]);
  return (
<>
<Headroom >
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
    <img onClick={showLoggedInUserOptions}
className="profile-photo-home"
src={avatar}></img>
<ContextMenu 

 contextMenu={contextMenu}
         setContextMenu={setContextMenu}
contextMenuData={[
                  {id : 1, icon : <MdGridView />
                  , label : "Dashboard"},
                  {id : 2, icon : <MdLogout />
                  , label : "Logout"},
                  {id : 3, icon : <MdSettings/>
                  , label : "Settings"},
                  {id : 4, icon : <MdClose />
                  , label : "Close Options"}
]}
/>

  </header>
</Headroom>


</>
  )
}

export default NavBar
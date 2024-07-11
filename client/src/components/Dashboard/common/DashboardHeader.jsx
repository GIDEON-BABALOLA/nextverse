import "../../../styles/components/Dashboard/dashboard-header.css"
import { MdMenu, MdLightMode, MdDarkMode} from "react-icons/md"
import image from "../../../assets/29.jpg"
import { useRef, useState } from "react"
import ContextMenu from "../../common/ContextMenu"
import {  MdLogout, MdSettings, MdClose }from "react-icons/md"
import { FaHome } from 'react-icons/fa';
import useWindowSize from "../../../hooks/useWindowSize"
const DashboardHeader = ({sidebarRef}) => {
  const {width, height} = useWindowSize()
  const themeRef = useRef();
  const toggleTheme  = () => {
    document.body.classList.toggle('dark-theme-variables');
     themeRef.current.querySelector('span:nth-child(1)').classList.toggle('active');
 themeRef.current.querySelector('span:nth-child(2)').classList.toggle('active');
  }
  const [contextMenu, setContextMenu] = useState()
  const showLoggedUserOptions = (e) => {
    if(width > 768){
      return
    }
    updateMenuPosition(e.clientX, e.clientY + 30)
contextMenu.current.style.visibility = "visible"
  }
  const updateMenuPosition = (x, y) => {
    const maxTopValue = height - contextMenu.current.offsetHeight;
    const maxLeftValue = width - contextMenu.current.offsetWidth; 
    contextMenu.current.style.left = `${Math.min(maxLeftValue, x)}px`;
    contextMenu.current.style.top = `${Math.min(maxTopValue, y)}px`; 
      };
  const showSidebar = () => {
       sidebarRef.current.classList.remove("litenote-sidebar-aside-close")
 sidebarRef.current.style.display='block';
  }
    const userName = "Gideon"
  return (
    <div className="litenote-dashboard-top">
    <button id="menu-btn" onClick={showSidebar}>
      <span>
        <MdMenu />
      </span>
    </button>
    <div className="litenote-dashboard-theme-toggler" width onClick={toggleTheme} ref={themeRef}>
    <span className="active">
    <MdDarkMode />
    </span>
    <span>
    <MdLightMode />
      </span>
    </div>
    
         <div className="litenote-dashboard-profile">
            <div className="info  profile-text">
          {/* it is meant to be p here */}
                <div>Hey, <b>{userName}</b>
                </div>
                <small className="text-muted" style={{color : "#7d8da1"}}>Admin</small>
            </div>
            <div> <img  
            style={{cursor: "pointer"}}
             className="litenote-dashboard-profile-photo" src={image} alt=""
            onClick={showLoggedUserOptions}
             /></div>
       
    </div>
    { width < 768 && <ContextMenu

 contextMenu={contextMenu}
         setContextMenu={setContextMenu}
contextMenuData={[
                  {id : 1, icon : <FaHome />
                  , label : "Home"},
                  {id : 2, icon : <MdLogout />
                  , label : "Logout"},
                  {id : 3, icon : <MdSettings/>
                  , label : "Settings"},
                  {id : 4, icon : <MdClose />
                  , label : "Close Options"}
]}
/>
    }
    </div>
  )
}

export default DashboardHeader
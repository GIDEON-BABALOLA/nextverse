import "../../../styles/components/Dashboard/dashboard-header.css"
import { MdMenu, MdLightMode, MdDarkMode} from "react-icons/md"
import image from "../../../assets/29.jpg"
import { useRef } from "react"



const DashboardHeader = ({sidebarRef}) => {
  const themeRef = useRef();
  const toggleTheme  = () => {
    document.body.classList.toggle('dark-theme-variables');
     themeRef.current.querySelector('span:nth-child(1)').classList.toggle('active');
 themeRef.current.querySelector('span:nth-child(2)').classList.toggle('active');
  }
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
    <div className="litenote-dashboard-theme-toggler" onClick={toggleTheme} ref={themeRef}>
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
            <div> <img   className="litenote-dashboard-profile-photo" src={image} alt="" /></div>
       
    </div>
    </div>
  )
}

export default DashboardHeader
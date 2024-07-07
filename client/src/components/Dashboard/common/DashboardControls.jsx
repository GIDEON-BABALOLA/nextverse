import "../../../styles/components/Dashboard/dashboard-controls.css"
import { MdMenu, MdLightMode, MdDarkMode} from "react-icons/md"
import image from "../../../assets/29.jpg"
const DashboardControls = () => {
    const userName = "Gideon"
  return (
    <div className="litenote-dashboard-top">
    <button id="menu-btn">
        <MdMenu />
    </button>
    <div className="litenote-dashboard-theme-toggler">
       <MdLightMode />
       <MdDarkMode />
    </div>
    
         <div className="litenote-dashboard-profile">
            <div className="litenote-dashboard-info">
                <p>Hey, <b> {userName}</b></p>
                <small className="litenote-dashboard-text-muted">Admin</small>
            </div>
            <div> <img   className="litenote-dashboard-profile-photo" src={image} alt="dashboard profile picture" /></div>
       
    </div>
    </div>
  )
}

export default DashboardControls
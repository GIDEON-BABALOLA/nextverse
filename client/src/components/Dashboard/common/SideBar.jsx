import { MdGridView, MdGroups, MdBarChart, MdAutoStories, MdPersonOutline, MdReport, MdEmail, MdSettings, MdLogout, MdClose } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom"
import "../../../styles/components/Dashboard/sidebar.css"
import logo from "../../../../src/assets/litenote.png"
import { useRef, useEffect } from 'react';
const SideBar = ({sidebarRef}) => {
   const linkRef = useRef()
   const currentPage = useParams();
   // console.log(linkRef.current.innerText)
   const currentUrl = Object.values(currentPage)[0].split("/")[1]
   const closeSidebar = () => {
sidebarRef.current.classList.add("litenote-sidebar-aside-close")
sidebarRef.current.style.display = "block";
   }
   useEffect(() => {
switch (linkRef.current.innerText) {
   case "Dashboard":
      console.log("gideon")
      break;

   default:
      console.log("dave")
      break;
}
   }, [currentUrl])
  return (
<>
<aside className="litenote-sidebar-aside" ref={sidebarRef} >

                    <div className="top">
                        <div className="logo">
                         <img src={logo} />
                         <h2 className="litenote-dashboard-h-two">Lite Note </h2>
                        </div>
             <div className="close" id="close-btn" onClick={closeSidebar}>

               <MdClose size={25}/>
             </div>
                    </div>

                    <div className="sidebar">
                    <Link to="/" className={`sidebar-links ${currentUrl === "home" && "active"}`} >
                    <FaHome size={24} />
                           <h3 className="litenote-dashboard-h-three">Home</h3>
        </Link>
                    <Link to="/dashboard" className='sidebar-links'>
                    <MdGridView size={24} />
                           <h3 className="litenote-dashboard-h-three">Dashboard</h3>
        </Link>
                      
                        
                        <Link to="/dashboard/users" className={`sidebar-links ${currentUrl === "users" && "active"}`} >
                        
                        <MdGroups size={24} />

                           <h3 className="litenote-dashboard-h-three"   >Users</h3>
                        </Link>

                        <Link  to="/dashboard/analytics"  className={`sidebar-links ${currentUrl === "analytics" && "active"}`}
                        
                          ref={linkRef}>
                        <MdBarChart size={24} />
                           <h3 className="litenote-dashboard-h-three">Analytics</h3>
                        </Link>
                        <Link to="/dashboard/stories" className={`sidebar-links ${currentUrl === "stories" && "active"}`} >
                        <MdAutoStories size={24} />

                           <h3 className="litenote-dashboard-h-three">Stories</h3>
                        </Link>
                        <Link to="/dashboard/profile" className={`sidebar-links ${currentUrl === "profile" && "active"}`} >
                        <MdPersonOutline size={24} />
                           <h3 className="litenote-dashboard-h-three">Profile</h3>
                        </Link>
                        <Link to="/dashboard/reports" className={`sidebar-links ${currentUrl === "reports" && "active"}`} >
                        <MdReport size={24} />
                           <h3 className="litenote-dashboard-h-three">Reports</h3>
                        </Link>
                        <Link to="/dashboard/email" className={`sidebar-links ${currentUrl === "messages" && "active"}`}>
                        <MdEmail size={24} />
                           <h3 className="litenote-dashboard-h-three">Messages</h3>
                           <span className="message-count">26</span>
                        </Link>
                        <Link to="/dashboard/settings" className={`sidebar-links ${currentUrl === "settings" && "active"}`} >
                        <MdSettings size={24} />
                           <h3 className="litenote-dashboard-h-three">Settings</h3>
                        </Link>
                        <Link href="/dashboard/logout"  className={`sidebar-links ${currentUrl === "logout" && "active"}`}>
                        <MdLogout size={24} />
                           <h3 className="litenote-dashboard-h-three">Logout</h3>
                        </Link>
                       
                    </div>
                </aside>
</>
  )
}

export default SideBar
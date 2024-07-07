import { MdGridView, MdGroups, MdBarChart, MdAutoStories, MdPersonOutline, MdReport, MdEmail, MdSettings, MdLogout, MdClose } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom"
import "../../../styles/components/Dashboard/sidebar.css"
import "../../../styles/components/Dashboard/common.css"
import logo from "../../../../src/assets/litenote.png"
const SideBar = () => {
  return (
<>
<aside className="litenote-sidebar-aside">

                    <div className="top">
                        <div className="logo">
                         <img src={logo} />
                         <h2 className="litenote-dashboard-h-two">Lite Note </h2>
                        </div>
             <div className="close" id="close-btn">

               <MdClose />
             </div>
                    </div>

                    <div className="sidebar">
                    <Link to="/" className='sidebar-links'>
                    <FaHome size={24} />
                           <h3 className="litenote-dashboard-h-three">Home</h3>
        </Link>
                    <Link to="/dashboard" className='sidebar-links'>
                    <MdGridView size={24} />
                           <h3 className="litenote-dashboard-h-three">Dashboard</h3>
        </Link>
                      
                        
                        <Link to="/dashboard/users" className='sidebar-links'>
                        
                        <MdGroups size={24} />

                           <h3 className="litenote-dashboard-h-three">Users</h3>
                        </Link>

                        <Link  to="/dashboard/analytics"  className=" sidebar-links active">
                        <MdBarChart size={24} />
                           <h3 className="litenote-dashboard-h-three">Analytics</h3>
                        </Link>
                        <Link to="/dashboard/stories" className='sidebar-links'>
                        <MdAutoStories size={24} />

                           <h3 className="litenote-dashboard-h-three">Stories</h3>
                        </Link>
                        <Link to="/dashboard/profile" className='sidebar-links'>
                        <MdPersonOutline size={24} />
                           <h3 className="litenote-dashboard-h-three">Profile</h3>
                        </Link>
                        <Link to="/dashboard/profile" className='sidebar-links'>
                        <MdReport size={24} />
                           <h3 className="litenote-dashboard-h-three">Reports</h3>
                        </Link>
                        <Link to="/dashboard/email" className='sidebar-links'>
                        <MdEmail size={24} />
                           <h3 className="litenote-dashboard-h-three">Messages</h3>
                           <span className="message-count">26</span>
                        </Link>
                        <Link to="/dashboard/settings" className='sidebar-links'>
                        <MdSettings size={24} />
                           <h3 className="litenote-dashboard-h-three">Settings</h3>
                        </Link>
                        <Link href="/dashboard/logout" className='sidebar-links'>
                        <MdLogout size={24} />
                           <h3 className="litenote-dashboard-h-three">Logout</h3>
                        </Link>
                       
                    </div>
                </aside>
</>
  )
}

export default SideBar
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import "../../../styles/components/Dashboard/common.css"
const DashboardLayout = ({sidebarRef}) => {
  return (
    <>
    <section className='full-dashboard'>
    <div className='litenote-dashboard-container'>
    <SideBar sidebarRef={sidebarRef}/>
    <Outlet />
    </div>
    </section>

    </>
  )
}
export default DashboardLayout
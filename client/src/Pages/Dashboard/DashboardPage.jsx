import DashboardToast from "../../components/common/DashboardToast"
import DashboardHeader from '../../components/Dashboard/common/DashboardHeader';
import RotationLoader from "../../components/Loaders/RotationLoader"
import { useState, useEffect } from "react";
const SettingsPage = ({dashboardToast, setDashboardToast, sidebarRef}) => {
  const [loadPage, setLoadPage] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoadPage(false)
    }, 2000);
      }, [])
  return (
    <>
    {loadPage ? 
    <>
    <RotationLoader />
    </>
     : <>
    <main>
   <DashboardToast dashboardToast={dashboardToast} setDashboardToast={setDashboardToast}/>
   <h2>
    DashboardPage
   </h2>
    </main>

    <div className="litenote-dashboard-right">
    <DashboardHeader sidebarRef={sidebarRef} />
    </div>
    </>
    }
    </>
  )
}

export default SettingsPage
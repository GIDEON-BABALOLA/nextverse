import DashboardToast from "../../components/common/DashboardToast"
const SettingsPage = ({dashboardToast, setDashboardToast}) => {
  return (
    <div>SettingsPage
    <DashboardToast dashboardToast={dashboardToast} setDashboardToast={setDashboardToast}/>
    </div>
  )
}

export default SettingsPage
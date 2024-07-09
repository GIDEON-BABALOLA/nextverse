import "../../styles/components/Dashboard/dashboard-toast.css"
import useWindowSize from "../../hooks/useWindowSize"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
const DashboardToast = ({dashboardToast, setDashboardToast}) => {
  const currentPage = useParams();
  // console.log(linkRef.current.innerText)
  const currentUrl = Object.values(currentPage)[0].split("/")[1]
  const {width} = useWindowSize()
  const closeDashboardToast = () => {
   setDashboardToast(false)
  }
  return (
    <div className={`litenote-dashboard-slide-up ${dashboardToast ? "show" : ""} `} >
<span>{width < 768 ? `Switched To The  ${currentUrl.split("")[0].toUpperCase().concat(currentUrl.split("").slice(1).join(""))} Page` : `You Have successfully Switched To The ${currentUrl.split("")[0].toUpperCase().concat(currentUrl.split("").slice(1).join(""))} Page`}</span>
<span className = "litenote-dashboard-slide-up-button">
<span href="/" className="slidesubmitbtn" onClick={closeDashboardToast}>Confirm</span>
</span>
    </div>
  )
}

export default DashboardToast
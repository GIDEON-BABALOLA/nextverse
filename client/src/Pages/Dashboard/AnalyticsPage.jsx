

import { useEffect, useState } from 'react';
import { 
  MdAnalytics, 
  MdBarChart, 
  MdInsights, 
  MdStackedLineChart, 
  MdGroups,
} from 'react-icons/md';
import { FaCommentDollar} from "react-icons/fa"
import RecentStories from '../../components/Dashboard/common/RecentStories';
import AnalyticsCard from '../../components/Dashboard/common/AnalyticsCard';
import RecentUpdates from '../../components/Dashboard/common/RecentUpdates';
import DashboardHeader from '../../components/Dashboard/common/DashboardHeader';
import StoriesAnalytics from '../../components/Dashboard/common/StoriesAnalytics';
import DashboardToast from '../../components/common/DashboardToast';
import ConnectivityToast from '../../components/common/connectivityToast';
import RotationLoader from '../../components/Loaders/RotationLoader';
const AnalyticsPage = ({sidebarRef, dashboardToast, setDashboardToast}) => {
    let time = new Date().toLocaleTimeString();
    const [timed, setTime] = useState(time)
    const [loadPage, setLoadPage] = useState(true)
    const month = ["january", "febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const datetime = new Date()
    useEffect(() => {
        setInterval(() => {
            var newTime = new Date().toLocaleTimeString()
        setTime(newTime)
        }, 1000);
        setInterval(() => {
          setLoadPage(false)
        }, 2000)
    }, [])
  return (
   <>
   { loadPage ? 
    <>
    <RotationLoader /> 
    </>
   :<>
             <main className='analytics-page-main'>
             <ConnectivityToast />
             <DashboardToast dashboardToast={dashboardToast} setDashboardToast={setDashboardToast} loadPage={loadPage}/>
     <h1 className='litenote-dashboard-h-one'>Dashboard</h1>
     <div className="litenote-dashboard-date">
       {/* <input type="date" /> */}
       {month[datetime.getMonth()]} {datetime.getDate()} {datetime.getFullYear()}{"   :   "}
       {timed}
     </div>
   
     <div className="litenote-dashboard-insights">
     <AnalyticsCard className={"litenote-dashboard-Stories"}
      r={36}
    cardPercent={"81%"}
    cardTotal={"25,200"}
    cardTitle={"Total Stories"}
    cx={38}
    cy={38}
    cardIcon={<MdAnalytics className='icon-dashboard'  size={20}/>}
    />



{/* <!--    --------End of stories--------- --> */}

<AnalyticsCard 
    className={"litenote-dashboard-authors"}
    cardPercent={"88%"}
    cardTotal={"17,260"}
    cardTitle={"Total Authors"}
    cx={38}
    cy={38}
    r={36}
    cardIcon={  <MdBarChart className='icon-dashboard' size={20}/>}
/>
{/* <!--    --------End of authors--------- --> */}

<AnalyticsCard
className={"litenote-dashboard-views"}
cardPercent={"79%"}
cardTotal={"3,500"}
cardTitle={"Total Views"}
cx={38}
cy={38}
r={36}
cardIcon={<MdInsights className='icon-dashboard' size={20}/>}
 />
<AnalyticsCard 
    className={"litenote-dashboard-likes"}
    cardPercent={"79%"}
    cardTotal={"7,500"}
    cardTitle={"Total likes"}
    cx={38}
    cy={38}
    r={36}
    cardIcon={<MdStackedLineChart  className='icon-dashboard' size={20}/>}

/>
<AnalyticsCard 
    className={"litenote-dashboard-users"}
    cardPercent={"79%"}
    cardTotal={"8,900"}
    cardTitle={"Total Users"}
    cx={38}
    cy={38}
    r={36}
    cardIcon={<MdGroups  className='icon-dashboard' size={20}/>}

/>
<AnalyticsCard 
    className={"litenote-dashboard-comments"}
    cardPercent={"79%"}
    cardTotal={"4,200"}
    cardTitle={"Total Comments"}
    cx={38}
    cy={38}
    r={36}
    cardIcon={<FaCommentDollar  className='icon-dashboard' size={20}/>}

/>
{/* <!--    --------End of  likes--------- --> */}   
</div>
{/* <!-- END OF  INSIGHTS --> */}
<RecentStories />
         </main>
       {/* <!--  ---------- END OF MAIN------------- --> */}

    <div className="litenote-dashboard-right">
     <DashboardHeader sidebarRef={sidebarRef} />
      {/* <!--   end of top --> */}
 <RecentUpdates />
 
     {/* <!--  ----------------END OF UPDATES---------- --> */}
     
   <StoriesAnalytics />
    </div>
    </>
    
   }
   </>
   
  )
}

export default AnalyticsPage
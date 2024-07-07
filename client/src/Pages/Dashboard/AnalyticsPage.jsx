
import { useEffect, useState } from 'react';
import { 
  MdAnalytics, 
  MdBarChart, 
  MdInsights, 
  MdStackedLineChart, 
  MdMenu, 
  MdLightMode, 
  MdDarkMode, 
  MdMenuBook, 
  MdVisibility, 
  MdFolderShared, 
  MdAdd, 
  MdGroups,
} from 'react-icons/md';
import { FaCommentDollar} from "react-icons/fa"
import RecentStories from '../../components/Dashboard/common/RecentStories';
import AnalyticsCard from '../../components/Dashboard/common/AnalyticsCard';
import RecentUpdates from '../../components/Dashboard/common/RecentUpdates';
import DashboardControls from '../../components/Dashboard/common/DashboardControls';
const AnalyticsPage = () => {
    let time = new Date().toLocaleTimeString();
    const [timed, setTime] = useState(time)
    const month = ["january", "febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const datetime = new Date()
    useEffect(() => {
        setInterval(() => {
            var newTime = new Date().toLocaleTimeString()
        setTime(newTime)
        }, 1000);
    }, [])
  return (
   <>
             <main className='that-font'>
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
     <DashboardControls />
      {/* <!--   end of top --> */}
 <RecentUpdates />
     {/* <!--  ----------------END OF UPDATES---------- --> */}
     
     <div className="litenote-dashboard-stories-analytics">
        <h2 className='litenote-dashboard-h-two'>Stories Analytics</h2>
        <div className="litenote-dashboard-item stories">
            <div className="litenote-dashboard-icon">
             <MdMenuBook />
            </div>
            <div className="litenote-dashboard-right">
                <div className="litenote-dashboard-info">
                    <h3 className="litenote-dashboard-h-three">Recent Stories</h3>
                    <small className="litenote-dashboard-text-muted">Last 24 Hours </small>
                </div>
                <h5 className="litenote-dashboard-success litenote-dashboard-h-five">+59%</h5>
            </div>
            </div>
        <div className="litenote-dashboard-item views">
            <div className="litenote-dashboard-icon">
             <MdVisibility />
            </div>
            <div className="litenote-dashboard-right">
                <div className="litenote-dashboard-info">
                    <h3 className="litenote-dashboard-h-three">Most Viewed</h3>
                    <small className="litenote-dashboard-text-muted">Last 24 Hours </small>
                </div>
                <h5 className="litenote-dashboard-success litenote-dashboard-h-five">+69%</h5>
            </div>
            </div>
        <div className="litenote-dashboard-item shared">
            <div className="litenote-dashboard-icon">
             <MdFolderShared />
            </div>
            <div className="litenote-dashboard-right">
                <div className="litenote-dashboard-info">
                    <h3 className="litenote-dashboard-h-three">Most Shared</h3>
                    <small className="litenote-dashboard-text-muted">Last 24 Hours </small>
                </div>
                <h5 className="litenote-dashboard-danger litenote-dashboard-h-five">+50%</h5>
            </div>
        </div>
        <div className="litenote-dashboard-item add">
         <MdAdd />
       <h3 className="litenote-dashboard-h-three">Add Stories</h3>
        </div>
        
     </div>
    </div>
   </>
  )
}

export default AnalyticsPage
import { 
  } from 'react-icons/md';
  import "../../../styles/components/Dashboard/analytics-card.css"
const AnalyticsProgress = ({cx, cy, r}) => {
  <svg className='special-icon-dashboard'>
  <circle cx={cx} cy={cy} r={r}></circle>
</svg>
}
const AnalyticsCard = ({cardTitle, cardTotal, cx, cy, r, cardPercent, className, cardIcon}) => {
  return (
   <>
      <div className={className}>
      <span>
      {cardIcon}
      </span>
   <div className="litenote-dashboard-middle">
    <div className="litenote-dashboard-left">
         <h3 className='litenote-dashboard-h-three'>{cardTitle}</h3> 
         <h1 className='litenote-dashboard-h-one'>{cardTotal}</h1> 
        </div>
<div className="litenote-dashboard-progress">
<AnalyticsProgress />
    <svg className=''>
        <circle cx={cx} cy={cy} r={r}></circle>
    </svg>
    <div className="litenote-dashboard-number">
      <p className='analytics-card-p'>{cardPercent}</p>
    </div>
</div>
 </div>
 <small className="litenote-dashboard-text-muted">Last 24 Hours </small>
   </div>


   </>
  )
}

export default AnalyticsCard
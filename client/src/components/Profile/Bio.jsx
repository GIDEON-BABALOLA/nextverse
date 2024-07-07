import { FaCheck } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";

const Bio = ({ toastRef, toastProgress }) => {
  const username = "Chris James"
  const followUser = () => {
toastRef.current.classList.add("active")
toastProgress.current.classList.add("active")
setTimeout(() => {
  toastRef.current.classList.remove("active")
}, 5000);
setTimeout(() => {
  toastProgress.current.classList.remove("active")
}, 5500);
  }
  return (
   <>
            <h2 className="litenote-profile-name">{`${username}`} 
            
          <span className="checkbot">
          <FaCertificate style={{color : "#ff5e62", margin: "1%"}} />
            <FaCheck className="checkman"  size={14}/> 
          </span>
          <button 
          
          className="follow"
          onClick={followUser}
          ><span className="follow-text"> 
          follow
          </span></button> 
          </h2>
        <p className="litenote-profile-bio">I love sharing my life experiences and connecting with others.</p>
   </>
  )
}

export default Bio
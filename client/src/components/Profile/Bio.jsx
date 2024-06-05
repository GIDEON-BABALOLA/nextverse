import { FaCheck } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";

const Bio = () => {
  const username = "Chris James"
  return (
   <>
            <h2 className="litenote-profile-name">{`${username}`} 
            
          <span className="checkbot">
          <FaCertificate style={{color : "#ff5e62", margin: "1%"}} />
            <FaCheck className="checkman"  size={14}/> 
          </span>
                      
          </h2>
        <p className="litenote-profile-bio">I love sharing my life experiences and connecting with others.</p>
   </>
  )
}

export default Bio
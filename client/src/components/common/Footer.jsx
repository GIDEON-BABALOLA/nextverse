import "../../styles/components/common/footer.css"
import { FaShieldAlt, FaCookieBite} from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
const Footer = ({ setShowTermsAndConditions, setShowCookieContent}) => {
  return (
  <>
    <footer>
    <div className="footer-content">
      <div className="logo" style={{display : "flex", flexDirection : "column"}}>
      <div style={{display : "flex", flexDirection : "row", gap : "7px", marginTop : "3%"}}>
      <FaShieldAlt/>
      <span style={{cursor : "pointer"}}
      onClick={() =>  setShowTermsAndConditions(true)}>
      Terms and Conditions
      </span>
      </div>
      <div style={{display : "flex", flexDirection : "row", gap : "7px",  marginTop : "3%"}}>
      <FaCookieBite/>
      <span style={{cursor : "pointer"}}
      onClick={() =>  setShowCookieContent(true)}>
      Cookie Policy
      </span>
      </div>

      </div>
      
      <div className="social-links">
   
      <FaFacebookSquare  className="footer-social-icons" size={30}/>
      <FaTwitter  className="footer-social-icons" size={30}/>
      <FaInstagram  className="footer-social-icons" size={30}/>
      </div>
    </div>
    <p>&copy; 2024 Next Verse. All rights reserved.</p>
  </footer>
  </>
  )
}

export default Footer
import "../../styles/components/common/footer.css"
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
  <>
    <footer>
    <div className="footer-content">
      <div className="logo">

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
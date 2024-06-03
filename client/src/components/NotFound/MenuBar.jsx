
import { useRef, useEffect } from "react"
import { FaInstagram, FaTwitter, FaFacebookSquare, FaLinkedin  } from "react-icons/fa";
import {  Link  } from 'react-router-dom'
const MenuBar = ({ nav, setNav}) => {
  const navbar = useRef()
  useEffect(() => {
    setNav(navbar)
  }, [setNav])
  
  return (
  <>
    <nav data-state="closed" ref={nav} className="notfound-nav">
  <ul className="notfound-ul">
  <li>
  <Link to="/">
        Home
        </Link>
  </li>
  <li>
  <Link to="/profile">
        Profile
        </Link>
  </li>
  <li>
  <Link to="/browse">
        Browse
        </Link>
  </li>
  <li>
    <div className="social-icons">
    <FaInstagram  className="four-o-four fa-xl" size={30}/>
      <FaTwitter className="four-o-four" size={30}/>
      <FaFacebookSquare className="four-o-four" size={30}/>
      <FaLinkedin  className="four-four" size={30}/>


    </div>
  </li>
  </ul>
</nav>
  </>
  )
}

export default MenuBar
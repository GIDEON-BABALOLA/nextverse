import "../../styles/components/common/navbar.css"
const NavBar = () => {
  return (
<>
<header>
    <nav className="notfound-nav">
      
      <div className="logo">
        <a href="#">Lite Note</a>
      </div>
      
      <div className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="submit.html">Publish</a>
        <a href="browse.html">Browse</a>
        <a href="profile.html">Profile</a>
      </div>
    </nav>
  </header>
</>
  )
}

export default NavBar
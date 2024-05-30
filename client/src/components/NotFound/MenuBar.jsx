
const MenuBar = () => {
  return (
  <>
    <nav data-state="closed">
  <ul>
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Profile</a>
  </li>
  <li>
    <a href="#">Browse</a>
  </li>
  <li>
    <div className="social-icons">
      <i className="fa-brands fa-instagram fa-xl four-o-four"></i>
      <i className="fa-brands fa-x-twitter fa-xl four-o-four"></i>
      <i className="fa-brands fa-square-facebook fa-xl four-o-four"></i>
    </div>
  </li>
  </ul>
</nav>
  </>
  )
}

export default MenuBar
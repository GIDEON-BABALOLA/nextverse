import "../../styles/components/common/footer.css"
const Footer = () => {
  return (
  <>
    <footer>
    <div className="footer-content">
      <div className="logo">
        <a href="#">Lite Note</a>
      </div>
      <div className="social-links">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <p>&copy; 2024 Next Verse. All rights reserved.</p>
  </footer>
  </>
  )
}

export default Footer
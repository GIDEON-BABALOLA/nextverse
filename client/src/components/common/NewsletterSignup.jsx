import "../../styles/components/common/newslettersignup.css"
import { FaTimes } from "react-icons/fa"
import {  useRef, useEffect, useState } from "react"
import useWindowScroll from "../../hooks/useWindowScroll"
import useWindowSize from "../../hooks/useWindowSize"
const NewsletterSignup = ({ page, showNewsLetter, setShowNewsLetter}) => {
   const [i, setI] = useState()
   const fullNewsletter = useRef()
   const  { y } = useWindowScroll()
   const { height} = useWindowSize()
// const [close, setClose] = useState(null)
const closeNewsletter = () => {
   setShowNewsLetter(false)
}
useEffect(() => {
   const scrollPercent = ((y / (parseInt(page.current.scrollHeight) - height)) * 100) + 20;
if(showNewsLetter === true){
   setI( scrollPercent + "%")
}
}, [showNewsLetter])

  return (
    <>
        <main 
        ref={fullNewsletter}
        style={{top : i}}
        className={`litenote-newsletter-main  ${showNewsLetter  ? 'litenote-newsletter-slide-down'  :  'litenote-newsletter-slide-up' }  `}>
   <div className="litenote-newsletter-container litenote-newsletter-news litenote-newsletter-flow">
<div style={{display : 'flex', flexDirection : "row", justifyContent : "space-between"}}>
<div> 
{/* <img src={litenote} alt="lite note" width="150px" height="100" /> */}
      <h2 className="litenote-newsletter-news__title">Sign up for newsletters</h2></div> 

  
      <FaTimes  style={{cursor : "pointer", color : 'black'}}
      size={50}
         onClick={closeNewsletter} 
      />
</div>
   
      <div className="litenote-newsletter-news-grid">
         <div className="litenote-newsletter-card__group">
            <div className="litenote-newsletter-card active">
               <input className="litenote-newsletter-custom" type="checkbox" id="check1"  checked />
               <label htmlFor="check1">
                  <h5 className="litenote-newsletter-h-five">Fiction</h5>
                  <p className="litenote-newsletter-p">Get Latest fictional stories</p>
               </label>
            </div>
            <div className="litenote-newsletter-card">
               <input className="litenote-newsletter-custom" type="checkbox" id="check2" />
               <label htmlFor="check2">
                  <h5 className="litenote-newsletter-h-five">Non Fiction</h5>
                  <p className="litenote-newsletter-p">The week’s biggest news</p>
               </label>
            </div>
         </div>
         <div className="litenote-newsletter-card__group">
            <div className="litenote-newsletter-card">
               <input className="litenote-newsletter-custom" type="checkbox" id="check3" />
               <label htmlFor="check3">
                  <h5 className="litenote-newsletter-h-five">Adventure</h5>
                  <p className="litenote-newsletter-p">Get Exciting  Adventure Stories </p>
               </label>
            </div>
            <div className="litenote-newsletter-card">
               <input className="litenote-newsletter-custom" type="checkbox" id="check4" />
               <label htmlFor="check4">
                  <h5 className="litenote-newsletter-h-five">Lite Note Updates</h5>
                  <p className="litenote-newsletter-p">Announcements and Updates</p>
               </label>
            </div>
         </div>
         <div className="litenote-newsletter-card__group">
            <div className="litenote-newsletter-card">
               <input className="litenote-newsletter-custom" type="checkbox" id="check5" />
               <label htmlFor="check5">
                  <h5 className="litenote-newsletter-h-five">True Life Stories </h5>
                  <p className="litenote-newsletter-p">Get exciting experiences </p>
               </label>
            </div>
            <div className="litenote-newsletter-card">
               <input className="litenote-newsletter-custom" type="checkbox" id="check6" />
               <label htmlFor="check6">
                  <h5 className="litenote-newsletter-h-five"> Weekly updates </h5>
                  <p className="litenote-newsletter-p"> update for the week</p>
               </label>
            </div>
         </div>
      </div>
      <div className="litenote-newsletter-news__form">
         <input type="email" placeholder="Enter your email address" />
         <button className="litenote-newsletter-news__btn">Subscribe</button>
      </div>
   </div>
</main>
    </>
  )
}

export default NewsletterSignup
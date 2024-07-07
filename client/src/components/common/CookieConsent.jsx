import "../../styles/components/common/cookie-consent.css"
import { FaCookieBite } from "react-icons/fa"
import { useRef, useEffect } from "react"
import gsap from "gsap"
const CookieConsent = ({ setShowCookieConsent, showCookieConsent}) => {
    const cookieWrapper = useRef()
    const item = useRef()
    const buttons = useRef()
    const removeCookie = () => {
        gsap.to(cookieWrapper.current, {
            y: null,
            rotation: null,
            yoyo: null,
            repeat: null,
            ease: null,
            duration: null
        })
        setShowCookieConsent(false)

    }
    const setCookie = () => {
        document.cookie = "cookieBy= litenote; max-age=" + 60 * 60 * 24 * 30
        setShowCookieConsent(false)
    }

useEffect(() => {
        const executeCodes = () => {
            if(document.cookie.includes("litenote")) return;
            setShowCookieConsent(true)   
            setTimeout(() => {
                gsap.to(cookieWrapper.current, {
                    y: 1,
                    rotation: 3,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    duration: 0.4
                })
            }, 2000);
        }
    setTimeout(() => {
       executeCodes()    
    }, 4000);

}, [])
  return (
    <div className={`litenote-cookie-wrapper ${showCookieConsent ? "show" : ""}`} ref={cookieWrapper}>
<header className="litenote-cookie-header">

    
<h3>
<FaCookieBite ref={item} style={{transform : ""}}
    className="cookie-image"
    size={30}
/>
        &nbsp;&nbsp;Cookies Constent
    
</h3>
</header>
    <div className="litenote-cookie-data">
        <p>
            This website use cookies to help you have a superior and more relevant
            browsing experience on the website.
            <a href="#">Read more...</a>
        </p>
        </div>


    <div className="litenote-cookie-buttons" ref={buttons}>
        <button className="litenote-cookie-button" id="acceptBtn" onClick={setCookie}>Accept</button>
        <button className="litenote-cookie-button decline" onClick={removeCookie}>Decline</button>
    </div>

</div>
  )
}

export default CookieConsent
import PopularStories from "../components/Home/PopularStories"
import Intro from "../components/Home/Intro.jsx"
import Faq from "../components/Home/faq.jsx"
import ChatBot from "../components/ChatBot/ChatBot.jsx"
import NewsletterSignup from "../components/common/NewsletterSignup.jsx"
import Testimonial from "../components/Home/Testimonial.jsx"
import TermsAndConditions from "../components/common/TermsAndConditions.jsx"
import { useState, useEffect, useRef } from "react"
import CookieConsent from "../components/common/CookieConsent.jsx"
import ConnectivityToast from "../components/common/connectivityToast.jsx"

const Home = ({ showTermsAndConditions, setShowTermsAndConditions, setShowCookieConsent, showCookieConsent}) => {

  const [showNewsLetter, setShowNewsLetter] = useState(null)
const page = useRef()
useEffect(() => {
  setTimeout(() => {
    setShowNewsLetter(!showNewsLetter)
  }, 3000);

}, [])

  return (
    <>
    <main ref={page}>
    <ConnectivityToast />
    <NewsletterSignup page={page}
    showNewsLetter={showNewsLetter} setShowNewsLetter={setShowNewsLetter} />
    <Intro />
    <TermsAndConditions showTermsAndConditions={showTermsAndConditions} setShowTermsAndConditions={setShowTermsAndConditions}/>
    <CookieConsent setShowCookieConsent={setShowCookieConsent} showCookieConsent={showCookieConsent}/>
<PopularStories />
<ChatBot />
<Faq />
<Testimonial />
    </main>
    </>
  )
}

export default Home
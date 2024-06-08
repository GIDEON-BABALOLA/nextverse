import PopularStories from "../components/Home/PopularStories"
import Intro from "../components/Home/Intro.jsx"
import Faq from "../components/Home/faq.jsx"
import ChatBot from "../components/ChatBot/ChatBot.jsx"
import NewsletterSignup from "../components/common/NewsletterSignup.jsx"
import { useState, useEffect, useRef } from "react"
import useWindowScroll from "../hooks/useWindowScroll.js"
const Home = () => {
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
    <NewsletterSignup page={page}
    showNewsLetter={showNewsLetter} setShowNewsLetter={setShowNewsLetter} />
    <Intro />
<PopularStories />
<ChatBot />
<Faq />
    </main>
    </>
  )
}

export default Home
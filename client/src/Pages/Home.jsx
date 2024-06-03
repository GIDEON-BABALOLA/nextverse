import PopularStories from "../components/Home/PopularStories"
import Intro from "../components/Home/Intro.jsx"
import Faq from "../components/Home/faq.jsx"
import ChatBot from "../components/ChatBot/ChatBot.jsx"
const Home = () => {
  return (
    <>
    <main>
    <Intro />
<PopularStories />
<ChatBot />
<Faq />
    </main>
    </>
  )
}

export default Home
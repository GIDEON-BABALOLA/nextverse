import "../../styles/components/Home/popularstories.css"
const PopularStories = () => {
  return (
   <>
      <main>
    <section className="hero">
      <div className="hero-content">
        <h1>Share Your Stories</h1>
        <p>Connect with others through the power of storytelling.</p>
        <a href="login.html" className="btn">Start Writing</a>
      </div>
    </section>

    <section className="featured-stories">
      <h2>Popular Stories</h2>
      <div className="story-grid">
         {/* Featured stories will be dynamically added here  */}
      </div>
    </section>
  </main>

   </>
  )
}

export default PopularStories
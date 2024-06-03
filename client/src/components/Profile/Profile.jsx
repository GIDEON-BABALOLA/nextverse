import Avatar from "./Avatar"
import Bio from "./Bio"
import Stats from "./Stats"
import StoryCard from "./StoryCard"
const Profile = () => {
  const username = "Gideon"
  return (
    <>
        <section className="litenote-profile-user-profile">
  <div className="litenote-profile-container">
    <div className="litenote-profile-header">
   <Avatar />
      <div className="litenote-profile-info">
 <Bio />
        <div className="litenote-profile-stats">
     <Stats />
        </div>
      </div>
    </div>
    <div className="litenote-profile-stories">
      <h3 className="litenote-profile-section-title">{`${username}`} Stories</h3>
      <div className="litenote-profile-stories-grid">
        {/* Dynamically generate user's stories here  */}
       <StoryCard />
         {/* Add more story cards as needed  */}
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Profile
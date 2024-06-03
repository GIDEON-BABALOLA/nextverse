const Avatar = () => {
  let pictureImage = "https://res.cloudinary.com/doctr0fct/image/upload/v1716408724/Avatars/qsxouazfwl38xzqjzs0n.jpg"
  return (
    <>
        <div className="litenote-profile-image">
        <img src={pictureImage} alt="User Avatar" />
      </div>
    </>
  )
}

export default Avatar
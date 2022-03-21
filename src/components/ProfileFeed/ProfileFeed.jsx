import "./profileFeed.css";

function ProfileFeed({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log("usejajdlajlr", PF + "/istockphoto-1298261537-612x612.jpg");
  // console.log(user);
  return (
    <div className="profileWrapper">
      <div className="profileTop">
        <div className="profileImageWrapper">
          <img
            src={
              user?.coverPicture === ""
                ? PF + "/post/10.jpeg"
                : user?.coverPicture
            }
            alt=""
            className="coverImage"
          />

          <img
            src={
              user?.profilePicture == ""
                ? PF + "/istockphoto-1298261537-612x612.jpg"
                : PF + user?.profilePicture
            }
            alt=""
            className="profilePic"
          />
        </div>
      </div>
      <div className="profileBottom">
        <h2 className="profileName">{user?.username}</h2>
        <p className="description">{user?.description}</p>
      </div>
    </div>
  );
}

export default ProfileFeed;

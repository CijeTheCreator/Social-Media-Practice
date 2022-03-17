import image from "./../../assets/istockphoto-1289220974-170667a.jpg";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

function Share() {
  const { user } = useContext(AuthContext);
  const description = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const desc = description.current.value;
    //The rest is when the server is online
  };
  return (
    <div className="shareWrapper">
      <form onSubmit={submitHandler}>
        <div className="shareTop">
          <Link to={"/profile/id"}>
            <img
              src={
                user?.profilePicture === ""
                  ? `${PF}/assets/istockphoto-1298261537-612x612.jpg`
                  : user.profilePicture
              }
              alt=""
              className="shareImage"
            />
          </Link>
          <input
            type="text"
            placeholder={`What's on your mind ${user.name.split(" ")[0]}?`}
            className="shareInput"
            ref={description}
          />
          <input type="file" id="file" className="inputFile" />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImageContainer">
            <img
              src={URL.createObjectURL(file)}
              alt="preview should go here"
              className="sharePreview"
            />
            <button onClick={setFile(null)}>Cancel</button> //replace this with
            an x btn later also work on this file thing at night
          </div>
        )}
        <div className="shareBottom">
          <ul className="listWrapper">
            <label htmlFor="file">
              <PermMediaIcon
                className="icon"
                htmlColor="#FF6A33"
              ></PermMediaIcon>
              <p>Photo or Video</p>
            </label>
            <li>
              <LabelIcon className="icon" htmlColor="purple"></LabelIcon>
              <p>Tag</p>
            </li>
            <li>
              <LocationOnIcon
                className="icon"
                htmlColor="green"
              ></LocationOnIcon>
              <p>Location</p>
            </li>
            <li>
              <EmojiEmotionsIcon
                className="icon"
                htmlColor="#FF9933"
              ></EmojiEmotionsIcon>
              <p>Feelings</p>
            </li>
          </ul>
          <button className="share" type="submit">
            Share
          </button>
        </div>
      </form>
    </div>
  );
}

export default Share;

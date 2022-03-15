import image from "./../../assets/istockphoto-1289220974-170667a.jpg";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

function Share() {
  return (
    <div className="shareWrapper">
      <div className="shareTop">
        <Link to={"/profile/id"}>
          <img src={image} alt="" className="shareImage" />
        </Link>
        <input
          type="text"
          placeholder="What in your mind Safak"
          className="shareInput"
        />
      </div>
      <hr className="shareHr" />
      <div className="shareBottom">
        <ul className="listWrapper">
          <li>
            <PermMediaIcon className="icon" htmlColor="#FF6A33"></PermMediaIcon>
            <p>Photo or Video</p>
          </li>
          <li>
            <LabelIcon className="icon" htmlColor="purple"></LabelIcon>
            <p>Tag</p>
          </li>
          <li>
            <LocationOnIcon className="icon" htmlColor="green"></LocationOnIcon>
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
        <button className="share">Share</button>
      </div>
    </div>
  );
}

export default Share;

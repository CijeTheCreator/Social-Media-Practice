import "./topBar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import image from "./../../assets/istockphoto-1289220974-170667a.jpg";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="topBarWrapper">
      <div className="section1">
        <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
          Lamasocial
        </Link>
      </div>
      <div className="section2">
        <SearchIcon className="searchIcon" htmlColor="gray"></SearchIcon>
        <input
          type="text"
          name="searchbar"
          placeholder="Search for friends, family, posts"
          className="searchBar"
        />
      </div>
      <div className="section3">
        <div className="linkHolder">
          <p>Homepage</p>
          <p>Timeline</p>
        </div>
        <div className="iconHolder">
          <div>
            <PersonIcon className="Person" htmlColor="white"></PersonIcon>
            <p className="PersonNumber">2</p>
          </div>
          <div>
            <MessageIcon className="Message" htmlColor="white"></MessageIcon>
            <p className="MessageNumber">3</p>
          </div>
          <div>
            <NotificationsIcon
              className="Notification"
              htmlColor="white"
            ></NotificationsIcon>
            <p className="NotificationNumber">5</p>
          </div>
        </div>
        <div className="imageWrapper">
          <Link to={"/profile/id"}>
            <img className="image" src={image} alt="profileImage" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

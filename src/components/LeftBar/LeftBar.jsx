import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import GroupIcon from "@mui/icons-material/Group";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import "./leftBar.css";
import image from "./../../assets/istockphoto-1289220974-170667a.jpg";
import { Users } from "./../../dummyData";

function LeftBar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="leftBar">
      <div className="LeftBarWrapper">
        <ul className="Options">
          <li>
            <RssFeedIcon></RssFeedIcon>
            <p>Feed</p>
          </li>
          <li>
            <ChatIcon></ChatIcon>
            <p>Chats</p>
          </li>
          <li>
            <VideoLibraryIcon></VideoLibraryIcon>
            <p>Videos</p>
          </li>
          <li>
            <GroupIcon></GroupIcon>
            <p>Groups</p>
          </li>
          <li>
            <BookmarksIcon></BookmarksIcon>
            <p>Bookmarks</p>
          </li>
          <li>
            <HelpOutlineIcon></HelpOutlineIcon>
            <p>Questions</p>
          </li>
          <li>
            <WorkIcon></WorkIcon>
            <p>Jobs</p>
          </li>
          <li>
            <EventIcon></EventIcon>
            <p>Events</p>
          </li>
          <li>
            <SchoolIcon></SchoolIcon>
            <p>Courses</p>
          </li>
        </ul>
        <button>Show More</button>
        <hr />
        <ul className="Friends">
          {Users.map((user) => {
            return (
              <li key={user.id}>
                <img
                  src={PF + user.profilePicture}
                  alt="profilePictureHere"
                  className="friendImage"
                />
                <p>{user.username}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;

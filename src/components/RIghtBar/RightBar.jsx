import "./rightbar.css";
import { Users } from "./../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function RightBar({ profile, user }) {
  const relationshipProcessor = (relationship) => {
    if (relationship == 1) {
      return "Single";
    } else if (relationship == 2) {
      return "Taken";
    } else if (relationship == 3) {
      return "It's complicated";
    }
  };

  const { user: currentUser } = useContext(AuthContext);

  let [friends, setFriends] = useState([]);
  useEffect(() => {
    const response = axios({
      method: "",
      url: "",
      data: {},
    }).then((data) => setFriends(data.data));
  }, []);

  const friendList = friends.map((freind) => {
    return (
      <li key={friend._id} className="userFriendLi">
        <img src={freind.profilePicture} alt="" className="userFriendImage" />
        <p className="userFriendName">{friendList.name}e</p>
      </li>
    );
  });
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const homeRightBar = () => {
    return (
      <div className="rightBar">
        {user !== currentUser && (
          <button className="followButton">This is follow button</button>
        )}
        <div className="rightBarWrapper">
          <div className="rightBarTop">
            <img src="/assets/gift.png" alt="imageGoesHere" />
            <p>
              <span>Pola Foster</span> and <span>3 other friends</span> have a
              birthday today.
            </p>
          </div>
          <div className="rightBarCenter">
            <img src="/assets/ad.png" alt="imageGoesHere" />
          </div>
          <div className="rightBarBottom">
            <p className="OnlineFriends">Online Friends</p>
            <div>
              <ul>
                {Users.map((user) => {
                  return (
                    <li key={user.id}>
                      <div className="picAndStatus">
                        <img
                          src={PF + user.profilePicture}
                          alt="imageGoesHere"
                        />
                        <div className="onlineIndicator"></div>
                      </div>
                      <p>{user.username}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const feedRightBar = () => {
    return (
      <div className="rightBar">
        user
        <div className="feedRightBarTop">
          <h2 className="title">User Information</h2>
          <div className="details">
            <p className="key">
              City: <span className="value">New York</span>
            </p>
            <p className="key">
              From: <span className="value">Madrid</span>
            </p>
            <p className="key">
              Relationship:{" "}
              <span className="value">
                {relationshipProcessor(user?.relationship)}
              </span>
            </p>
          </div>
        </div>
        <div className="feedRightBarBottom">
          <h2 className="title">User Friends</h2>
          <div className="userFriendsWrapper">
            <ul>{friendList}</ul>
          </div>
        </div>
      </div>
    );
  };
  return profile ? feedRightBar() : homeRightBar();
}

export default RightBar;

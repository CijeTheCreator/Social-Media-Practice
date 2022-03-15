import "./rightbar.css";
import { Users } from "./../../dummyData";

function RightBar({ profile }) {
  const relationshipProcessor = (relationship) => {
    if (relationship == 1) {
      return "Single";
    } else if (relationship == 2) {
      return "Taken";
    } else if (relationship == 3) {
      return "It's complicated";
    }
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const homeRightBar = () => {
    return (
      <div className="rightBar">
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
            <ul>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
            </ul>
            <ul>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
            </ul>
            <ul>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
              <li className="userFriendLi">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="userFriendImage"
                />
                <p className="userFriendName">Mmesoma Osadebe</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return profile ? feedRightBar() : homeRightBar();
}

export default RightBar;

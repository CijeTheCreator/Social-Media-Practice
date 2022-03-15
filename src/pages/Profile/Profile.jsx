import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RIghtBar/RightBar";
import Feed from "../../components/Feed/Feed";
import "./profile.css";
import ProfileFeed from "../../components/ProfileFeed/ProfileFeed";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  let [user, setUser] = useState({});
  const param = useParams();
  // console.log("console.log(param)", param);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await axios({
        method: "get",
        url: `http://localhost:8080/v1/api/users/?username=${param.id}`,
      });
      // console.log("console.log(data.data)", data);
      setUser(data.data);
    };
    fetchUser();
  }, [user]);

  return (
    <div>
      <TopBar></TopBar>
      <div className="barsWrapper">
        <LeftBar></LeftBar>
        <div className="solution">
          <ProfileFeed user={user}></ProfileFeed>
          <div className="solutionLevel2">
            <Feed></Feed>
            <RightBar profile></RightBar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

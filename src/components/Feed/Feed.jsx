import Share from "../Share/Share";
import Post from "../Post/Post";
import ProfileFeed from "../ProfileFeed/ProfileFeed";
import { Posts, Users } from "./../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { AuthContext } from "../../context/AuthContext";
import "./feed.css";
import { Add } from "@mui/icons-material";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

function Feed({ profile, user }) {
  const { user: currentuser } = useContext(AuthContext);
  let [posts, setPost] = useState([]);
  let [users, setUsers] = useState([]);
  let [usersPosts, setUsersPosts] = useState([]);
  let [ProcessedPosts, setProcessedPosts] = useState([]);
  useEffect(() => {
    const ProcessedPostsFromMongo = async () => {
      const fetchPosts = async () => {
        const requestedPosts = await axios({
          method: "get",
          url: "/v1/api/posts/getTimelinePosts/62230680689b091c349d5c32",
        });

        return requestedPosts;
      };
      const fetchUsers = async () => {
        const requestedUsers = await axios({
          method: "get",
          url: "/v1/api/users/getAllUsers/get",
        });
        return requestedUsers;
      };

      const posts = await fetchPosts();
      const users = await fetchUsers();

      const ProcessedPosts = posts.data.map((post) => {
        const obj = post;
        const user = users.data.find((user) => user._id === obj.postee);
        obj.userPhoto = user?.profilePicture;
        obj.userName = user?.username;
        obj.timeAgo = timeAgo.format(new Date(obj.createdAt).getTime());

        return obj;
      });
      return ProcessedPosts;
    };
    ProcessedPostsFromMongo().then((data) => setProcessedPosts(data));
    const usersOnlyPost = ProcessedPosts.filter(
      (el) => el.postee === user.userName
    ); //Not sure whether it is user or username
    setUsersPosts(usersOnlyPost);
  }, []);

  const homeFeed = function () {
    return (
      <div className="feed">
        <Share></Share>
        {ProcessedPosts.sort(
          (el2, el1) =>
            new Date(el2.createdAt).getTime() -
            new Date(el1.createdAt).getTime()
        ).map((post) => {
          return <Post key={post._id} postData={post}></Post>;
        })}
      </div>
    );
  };
  const profileFeed = function () {
    return (
      <div className="feed">
        {/* <ProfileFeed></ProfileFeed> */}
        {user?.username === currentuser.username && <Share></Share>}

        {usersPosts.map((post) => {
          console.log(post);
          return <Post key={post._id} postData={post}></Post>;
        })}
        {usersPosts.length == 0 && (
          <p className={"info"}>This user does not have any post</p>
        )}
      </div>
    );
  };

  return profile ? profileFeed() : homeFeed();
}

export default Feed;

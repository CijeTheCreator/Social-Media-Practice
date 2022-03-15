import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RecommendIcon from "@mui/icons-material/Recommend";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Post({ postData }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(PF + postData?.photo);
  let [likes, setLikes] = useState(postData?.likes.length);
  let [isLiked, setisLiked] = useState(false);
  let [statement, setStatement] = useState("");
  let [statement2, setStatement2] = useState("");
  const clickHandler = () => {
    if (isLiked) {
      setLikes(likes);
      setisLiked(!isLiked);
      setStatement("");
      setStatement2("");
    } else {
      setLikes(likes);
      setisLiked(!isLiked);
      setStatement(" You and ");
      setStatement2(" other ");
    }
  };
  return (
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <div className="postTopUserWrapper">
            <Link to={`/profile/${postData?.userName}`}>
              <img src={PF + postData?.userPhoto} alt="imageShouldGoHere" />
            </Link>

            <p>{postData?.userName}</p>
          </div>
          <p className="time">{postData?.timeAgo}</p>
        </div>
        <div className="postTopRight">
          <MoreVertIcon className="optionsIcon"></MoreVertIcon>
        </div>
      </div>
      <div className="postCenter">
        <p className="description">{postData?.description}</p>
        <img src={PF + postData?.image} alt="imageShouldGoHere" />
      </div>
      <div className="postBottom">
        <div className="likesAndHearts" onClick={clickHandler}>
          <RecommendIcon htmlColor="blue" className="icon"></RecommendIcon>
          <FavoriteIcon htmlColor="red" className="icon"></FavoriteIcon>
          <p className="likeText">{`${statement}${likes} ${statement2} people liked this post`}</p>
        </div>
        <div className="comments">
          <p>{`9 comments`}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

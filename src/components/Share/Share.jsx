import image from "./../../assets/istockphoto-1289220974-170667a.jpg";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Share() {
  let [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const description = useRef();
  const onChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const submitHandler = async (e) => {
    e.preventDefault();
    const desc = description.current.value;
    const newPost = {
      id: user._id,
      description: desc,
      image: file?.name,
    };

    if (file) {
      const data = new FormData();
      const filename = file.name + Date.now();
      data.append("file", file);
      data.append("name", filename);
      newPost.image(filename);
      try {
        const response = await axios({
          method: "POST",
          url: "http://127.0.0.1:8080/v1/api/upload",
          data: data,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8080/v1/api/posts/createPost/" + user?._id,
        data: newPost,
      }).then(() => {
        window.location.reload();
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="shareWrapper">
      <form onSubmit={submitHandler}>
        <div className="shareTop">
          <Link to={`/profile/${user?.username}`}>
            <img
              src={
                user?.profilePicture === ""
                  ? `${PF}/istockphoto-1298261537-612x612.jpg`
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
          <input
            type="file"
            id="file"
            className="inputFile"
            onChange={onChangeHandler}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImageContainer">
            <img
              src={URL.createObjectURL(file)}
              alt="preview should go here"
              className="sharePreview"
            />
            <button onClick={setFile(null)}>Cancel</button>
          </div>
        )}
        <div className="shareBottom">
          <ul className="listWrapper">
            <li>
              <label htmlFor="file">
                <PermMediaIcon
                  className="icon"
                  htmlColor="#FF6A33"
                ></PermMediaIcon>
                <p>Photo or Video</p>
              </label>
            </li>
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

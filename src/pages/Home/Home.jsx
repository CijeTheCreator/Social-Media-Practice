import TopBar from "../../components/TopBar/TopBar";
import "./home.css";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RIghtBar/RightBar";

function Home() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="barsWrapper">
        <LeftBar></LeftBar>
        <Feed></Feed>
        <RightBar></RightBar>
      </div>
    </div>
  );
}

export default Home;

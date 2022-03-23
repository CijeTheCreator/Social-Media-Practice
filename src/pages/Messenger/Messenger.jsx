import "./Messenger.css";
import TocIcon from "@mui/icons-material/Toc";
import SearchIcon from "@mui/icons-material/Search";
import TopBar from "./../../components/TopBar/TopBar";

import Conversation from "../../components/Conversation/Conversation";

function Messenger() {
  return (
    <>
      <TopBar></TopBar>

      <div className="messengerWrapper">
        <div className="conversations">
          <div className="conversationTop">
            <TocIcon className="messengerTocIcon"></TocIcon>
            <div className="inputWrapper">
              <SearchIcon className="messengerSearchIcon"></SearchIcon>
              <input
                type="text"
                className="messengerSearchInput"
                placeholder="Search"
              />
            </div>
          </div>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
          <Conversation></Conversation>
        </div>
        <div className="messageWindow">Message Window</div>
      </div>
    </>
  );
}

export default Messenger;

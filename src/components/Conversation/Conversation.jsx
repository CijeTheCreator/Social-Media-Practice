import image from "./../../assets/istockphoto-1289220974-170667a.jpg";
import "./conversation.css";
function Conversation() {
  return (
    <>
      <div className="conversationBottom">
        <div className="conversationPerson">
          <div className="conversationPersonImageDiv">
            <img src={image} alt="" className="conversationPersonImage" />
          </div>
          <div className="conversationPersonDetails">
            <div className="conversationPersonDetailsLeft">
              <p className="conversationName">Chibuike</p>
              <p className="conversationLastMessage">Sorry</p>
            </div>
            <div className="conversationPersonDetailsRight">
              <p className="dateOfLastMessage">Tue</p>
              <div className="messagesCount">4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversation;

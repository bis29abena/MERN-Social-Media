import "./chatonline.css";


export default function ChatOnline() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="chatonline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img src={`${PF}/persons/bismark.jpg`} alt="" className="chatOnlineImg"/>
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Bismark Osei</span>
      </div>
    </div>
  );
}

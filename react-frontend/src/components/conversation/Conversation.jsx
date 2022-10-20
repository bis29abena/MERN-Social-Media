import "./conversation.css"

export default function Conversation() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="conversation">
      <div className="conversationWrapper">
      <img src={`${PF}/persons/bismark.jpg`} alt="" className="conversationImg"/>
        <span className="conversationName"> Bismark</span>
      </div>
        
    </div>
  )
}

//import;
import "./Card.css";

function FriendApplicant({caption, src, currNum, totalNum}) {
  return (
    <div className="Card">
      <h4 className="Card-title">{caption}</h4>
      <img className="Card-image" src={src} alt={caption} />
      <small className="Card-small">
        Image {currNum} of {totalNum}.
      </small>
    </div>
  //   <div className="Card">
  //   <h4 className="Card-title">{user.username}</h4>
  //   <img className="Card-image" src={src} alt={caption} />
  //   <small className="Card-small">
  //     Image {currNum} of {totalNum}.
  //   </small>
  //  <div>
  //   <div> Hobbies {user.hobbies}</div>
  //   <div> Interests {user.interests}</div>
  // </div>
  )
}

export default FriendApplicant;
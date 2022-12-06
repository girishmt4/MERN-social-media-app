const SuggestionItem = (props) => {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={props.userImage} alt="" />
        <span>{props.userLabel}</span>
      </div>
      <div className="buttons">
        <button className="follow">Follow</button>
        <button className="dismiss">Dismiss</button>
      </div>
    </div>
  );
};

export default SuggestionItem;

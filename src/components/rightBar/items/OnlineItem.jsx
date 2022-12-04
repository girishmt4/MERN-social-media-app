const OnlineItem = (props) => {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={props.userImage} alt="" />
        <div className="online"></div>
        <span>{props.userLabel}</span>
      </div>
    </div>
  );
};

export default OnlineItem;

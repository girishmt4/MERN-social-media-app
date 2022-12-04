const ActivityItem = (props) => {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={props.userImage} alt="" />
        <p>
          <span>{props.userLabel}</span>
          {` ${props.text}`}
        </p>
      </div>
      <span>{props.timeStamp}</span>
    </div>
  );
};

export default ActivityItem;

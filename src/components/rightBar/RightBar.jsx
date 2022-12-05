import ActivityItem from "./items/ActivityItem";
import ItemContainer from "./items/ItemContainer";
import OnlineItem from "./items/OnlineItem";
import SuggestionItem from "./items/SuggestionItem";
import "./RightBar.scss";

const imagesrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyFHOw8dO_4vTwdIEx6VeI-2U6mBz7YTQgjWVJcvT_sx3C3MMSkJ-Q8wlEeANOyTtGhY&usqp=CAU";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="main-container">
        <ItemContainer>
          <span>Suggestions For You</span>
          <SuggestionItem userImage={imagesrc} userLabel="My Friend" />
          <SuggestionItem userImage={imagesrc} userLabel="My Friend" />
        </ItemContainer>

        <ItemContainer>
          <span>Activities List</span>
          <ActivityItem
            userImage={imagesrc}
            userLabel="My Friend"
            text="changed his profile picture"
            timeStamp="1 min ago"
          />
          <ActivityItem
            userImage={imagesrc}
            userLabel="My Friend"
            text="changed his profile picture"
            timeStamp="1 min ago"
          />
          <ActivityItem
            userImage={imagesrc}
            userLabel="My Friend"
            text="changed his profile picture"
            timeStamp="1 min ago"
          />
          <ActivityItem
            userImage={imagesrc}
            userLabel="My Friend"
            text="changed his profile picture"
            timeStamp="1 min ago"
          />
        </ItemContainer>

        <ItemContainer>
          <span>Online Friends</span>
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
          <OnlineItem userImage={imagesrc} userLabel="My Friend" />
        </ItemContainer>
      </div>
    </div>
  );
};

export default RightBar;

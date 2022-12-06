import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Stories.scss";

//TEMP
const imagesrc =
  "https://blog.hootsuite.com/wp-content/uploads/2022/08/Instagram-story-ideas_share-a-post-with-new-post-sticker.png";

const stories = [
  {
    id: 1,
    name: "My Friend",
    img: imagesrc,
  },
  {
    id: 2,
    name: "My Friend",
    img: imagesrc,
  },
  {
    id: 3,
    name: "My Friend",
    img: imagesrc,
  },
  {
    id: 4,
    name: "My Friend",
    img: imagesrc,
  },
];

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;

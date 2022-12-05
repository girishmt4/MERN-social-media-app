import "./LeftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import Item from "./item/Item";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <Item
            className="user"
            image={currentUser.profilePic}
            label={currentUser.name}
          />
          <Item className="item" image={Friends} label="Friends" />
          <Item className="item" image={Groups} label="Groups" />
          <Item className="item" image={Market} label="Market" />
          <Item className="item" image={Watch} label="Watch" />
          <Item className="item" image={Memories} label="Memories" />
        </div>
        <div className="menu">
          <span>Your Shortcuts</span>
          <Item className="item" image={Events} label="Events" />
          <Item className="item" image={Gaming} label="Gaming" />
          <Item className="item" image={Gallery} label="Gallery" />
          <Item className="item" image={Videos} label="Videos" />
          <Item className="item" image={Messages} label="Messages" />
        </div>

        <div className="menu">
          <span>Others</span>
          <Item className="item" image={Fund} label="Fund" />
          <Item className="item" image={Tutorials} label="Tutorials" />
          <Item className="item" image={Courses} label="Courses" />

          <Item className="item" image={Fund} label="Fund" />
          <Item className="item" image={Tutorials} label="Tutorials" />
          <Item className="item" image={Courses} label="Courses" />
          <Item className="item" image={Fund} label="Fund" />
          <Item className="item" image={Tutorials} label="Tutorials" />
          <Item className="item" image={Courses} label="Courses" />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

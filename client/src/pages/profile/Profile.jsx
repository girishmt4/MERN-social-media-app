import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {
  const userId = useLocation().pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: userInfo = {},
  } = useQuery(["userInfo" + userId], async () => {
    try {
      const response = await fetch("http://localhost:8800/api/users/" + userId);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="profile">
      <div className="images">
        <img src={userInfo.coverPic} alt="" className="cover-pic" />
        <img src={userInfo.profilePic} alt="" className="profile-pic" />
      </div>
      <div className="profile-container">
        <div className="user-info">
          <div className="left">
            <a href="facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{userInfo.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{`${userInfo.city}, ${userInfo.state}, ${userInfo.country}`}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{userInfo.website}</span>
              </div>
            </div>
            {currentUser._id !== userId ? (
              <button>follow</button>
            ) : (
              <button>update</button>
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;

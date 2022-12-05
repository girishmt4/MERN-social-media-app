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

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=" "
          className="cover-pic"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profile-pic"
        />
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
            <span>Girish Tiwale</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>CA, USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>girishtiwale.com</span>
              </div>
            </div>
            <button>follow</button>
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

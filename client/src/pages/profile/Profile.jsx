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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import UpdateProfile from "../../components/updateProfile/UpdateProfile";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const userId = useLocation().pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const { data: userInfo = {} } = useQuery(["userInfo" + userId], async () => {
    try {
      const response = await fetch("http://localhost:8800/api/users/" + userId);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  });

  // console.log(userInfo);

  const queryClient = useQueryClient();

  const followMutation = useMutation(
    async (isFollowing) => {
      const fetchMethod = isFollowing ? "DELETE" : "PUT";
      const fetchUrl = isFollowing
        ? "http://localhost:8800/api/users/" + userId + "/unfollow"
        : "http://localhost:8800/api/users/" + userId + "/follow";

      try {
        const response = await fetch(fetchUrl, {
          method: fetchMethod,
          credentials: "include",
        });
        return response.json();
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userInfo" + userId);
      },
    }
  );

  const followHandler = async () => {
    followMutation.mutate(userInfo.followers.includes(currentUser._id));
  };

  return (
    <div className="profile">
      <div className="images">
        <img
          src={"/upload/" + userInfo.coverPic}
          alt=""
          className="cover-pic"
        />
        <img
          src={"/upload/" + userInfo.profilePic}
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
              userInfo.followers &&
              userInfo.followers.includes(currentUser._id) ? (
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={followHandler}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={followHandler}
                >
                  Follow
                </button>
              )
            ) : (
              <button onClick={() => setOpenUpdate(true)}>Update</button>
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId} />
      </div>
      {openUpdate && (
        <UpdateProfile setOpenUpdate={setOpenUpdate} userInfo={userInfo} />
      )}
    </div>
  );
};

export default Profile;

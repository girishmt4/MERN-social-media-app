import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import "./Post.scss";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  //TEMP

  const {
    isLoading,
    error,
    data: likes = [],
  } = useQuery(["likes" + post._id], async () => {
    try {
      // console.log("inside");
      const response = await fetch(
        "http://localhost:8800/api/likes?postId=" + post._id
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.userId.name}</span>
              </Link>
              <span className="time-stamp">
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          {post.img && <img src={"/upload/" + post.img} alt="" />}
        </div>
        <div className="info">
          <div className="info-item">
            {likes.find((e) => e._id === currentUser._id) ? (
              <FavoriteOutlinedIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            {`${likes.length} Likes`}
          </div>
          <div
            className="info-item"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />4 Comments
          </div>
          <div className="info-item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post._id} />}
      </div>
    </div>
  );
};

export default Post;

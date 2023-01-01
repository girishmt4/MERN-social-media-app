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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  //TEMP

  const { data: likes = [] } = useQuery(["likes" + post._id], async () => {
    try {
      const response = await fetch(
        "http://localhost:8800/api/likes?postId=" + post._id
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  });

  const { data: comments = [] } = useQuery(
    ["comments" + post._id],
    async () => {
      try {
        const response = await fetch(
          "http://localhost:8800/api/comments?postId=" + post._id
        );
        return response.json();
      } catch (err) {
        console.log(err);
      }
    }
  );

  const queryClient = useQueryClient();

  const likeHandlerMutation = useMutation(
    async (liked) => {
      const fetchMethod = liked ? "DELETE" : "POST";
      try {
        const response = await fetch("http://localhost:8800/api/likes", {
          method: fetchMethod,
          credentials: "include",
          body: JSON.stringify({ postId: post._id }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        return response.json();
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes" + post._id]);
      },
    }
  );

  const deleteMutation = useMutation(
    async (postId) => {
      try {
        const response = await fetch(
          "http://localhost:8800/api/posts/" + postId,
          {
            method: "DELETE",
            credentials: "include",
          }
        );
        return response.json();
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const likeHandler = () => {
    likeHandlerMutation.mutate(likes.find((e) => e._id === currentUser._id));
  };

  const deleteHandler = () => {
    deleteMutation.mutate(post._id);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.userId.profilePic} alt="" />
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
          {post.userId._id === currentUser._id && (
            <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
          )}
          {menuOpen && <button onClick={deleteHandler}>delete</button>}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          {post.img && <img src={"/upload/" + post.img} alt="" />}
        </div>
        <div className="info">
          <div className="info-item">
            {likes.find((e) => e._id === currentUser._id) ? (
              <FavoriteOutlinedIcon
                style={{ color: "red" }}
                onClick={likeHandler}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={likeHandler} />
            )}
            {`${likes.length} Likes`}
          </div>
          <div
            className="info-item"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon /> {`${comments.length} Comments`}
          </div>
          {/* <div className="info-item">
            <ShareOutlinedIcon />
            Share
          </div> */}
        </div>
        {commentOpen && <Comments postId={post._id} />}
      </div>
    </div>
  );
};

export default Post;

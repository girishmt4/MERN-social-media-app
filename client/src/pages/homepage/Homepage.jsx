import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useContext } from "react";
import CreatePost from "../../components/createPost/CreatePost";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import { AuthContext } from "../../context/authContext";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <Stories /> */}
      <CreatePost />
      <Posts />
    </div>
  );
};

export default Homepage;

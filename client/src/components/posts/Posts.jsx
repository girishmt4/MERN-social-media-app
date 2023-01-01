import Post from "./Post";
import "./Posts.scss";
import { useQuery } from "@tanstack/react-query";

const Posts = ({ userId = "" }) => {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(["posts" + userId], async () => {
    try {
      const response = await fetch(
        "http://localhost:8800/api/posts?userId=" + userId,
        {
          credentials: "include",
        }
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="posts">
      {error
        ? "Something went wrong.."
        : isLoading
        ? "Loading..."
        : posts.length === 0
        ? "No Posts To Display! Please Follow Someone to see their posts in your feed! "
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Posts;

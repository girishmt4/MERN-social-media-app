import Post from "./Post";
import "./Posts.scss";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(["posts"], async () => {
    try {
      const response = await fetch("http://localhost:8800/api/posts", {
        credentials: "include",
      });
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
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Posts;

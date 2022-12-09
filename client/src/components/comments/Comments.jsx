import { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useState } from "react";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [addedComment, setAddedComment] = useState("");

  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: comments,
  } = useQuery(["comments"], async () => {
    try {
      const response = await fetch(
        "http://localhost:8800/api/comments?postId=" + postId
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  });

  const mutation = useMutation(
    async (newComment) => {
      try {
        console.log(newComment);
        const response = await fetch("http://localhost:8800/api/comments", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(newComment),
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
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const postHandler = (event) => {
    event.preventDefault();
    mutation.mutate({ desc: addedComment, postId: postId });
    setAddedComment("");
  };

  return (
    <div className="comments">
      <div className="new-comment">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Write a comment.."
          onChange={(e) => setAddedComment(e.target.value)}
          value={addedComment}
        />
        <button onClick={postHandler}>Post</button>
      </div>
      {error
        ? "Error Occurred"
        : isLoading
        ? "Loading.."
        : comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <img src={comment.userId.profilePic} alt="" />
              <div className="info">
                <span>{comment.userId.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="timestamp">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;

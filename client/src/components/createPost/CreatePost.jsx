import "./CreatePost.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (newPost) => {
      try {
        const response = await fetch("http://localhost:8800/api/posts", {
          credentials: "include",
          method: "POST",
          body: JSON.stringify(newPost),
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
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const shareHandler = (event) => {
    event.preventDefault();
    mutation.mutate({ desc });
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={"/upload/" + currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={shareHandler}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

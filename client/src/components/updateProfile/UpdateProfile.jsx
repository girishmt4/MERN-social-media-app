import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import "./UpdateProfile.scss";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UpdateProfile = ({ setOpenUpdate, userInfo }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    email: userInfo.email,
    password: "",
    name: userInfo.name,
    city: userInfo.city,
    state: userInfo.state,
    country: userInfo.country,
    website: userInfo.website,
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("http://localhost:8800/api/upload", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      return response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTexts((prev) => ({ ...prev, [name]: value }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (updatedUser) => {
      if (updatedUser.password.trim().length === 0) {
        delete updatedUser.password;
      }
      console.log(updatedUser);

      try {
        const response = await fetch(
          "http://localhost:8800/api/users/" + userInfo._id,
          {
            credentials: "include",
            method: "PUT",
            body: JSON.stringify(updatedUser),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        return response.json();
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userInfo" + userInfo._id);
      },
    }
  );

  const clickHandler = async (e) => {
    e.preventDefault();

    //TODO: find a better way to get image URL
    let coverUrl;
    let profileUrl;
    coverUrl = cover ? await upload(cover) : userInfo.coverPic;
    profileUrl = profile ? await upload(profile) : userInfo.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  };

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <form>
          <div className="files">
            <label htmlFor="cover">
              <span>Cover Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : "/upload/" + userInfo.coverPic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
            />
            <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : "/upload/" + userInfo.profilePic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="profile"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files[0])}
            />
          </div>
          <label>Email</label>
          <input
            type="text"
            value={texts.email}
            name="email"
            onChange={changeHandler}
          />
          <label>Password</label>
          <input
            type="text"
            value={texts.password}
            name="password"
            onChange={changeHandler}
          />
          <label>Name</label>
          <input
            type="text"
            value={texts.name}
            name="name"
            onChange={changeHandler}
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            value={texts.city}
            onChange={changeHandler}
          />
          <label>State</label>
          <input
            type="text"
            name="state"
            value={texts.state}
            onChange={changeHandler}
          />
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={texts.country}
            onChange={changeHandler}
          />
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={texts.website}
            onChange={changeHandler}
          />
          <button onClick={clickHandler}>Update</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;

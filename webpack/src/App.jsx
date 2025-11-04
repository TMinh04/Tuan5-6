import React from "react";
import classNames from "classnames";
import profile from "./images/profile.jpg";

export default function App() {
  const btnClass = classNames("btn", { active: true });

  const handleClick = () => {
    alert("Xin chào");
  };

  return (
    <div className="container">
      <h1 className="title">webpack</h1>
      <p className="desc">
      Chào bạn
      </p>
      <img src={profile} alt="Profile" className="profile-img" />
      <button className={btnClass} onClick={handleClick}>
        Bấm vào đây
      </button>
    </div>
  );
}

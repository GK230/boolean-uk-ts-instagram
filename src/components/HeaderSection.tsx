import React from "react";
import { useState, useEffect } from "react";
import useStore from "../store";

function HeaderSection() {
  const users = useStore((store) => store.users);
  if (!users) {
    console.log("error");
  } else {
    console.log(users);
  }

  return (
    <header className="main-header">
      <div className="wrapper">
        {users.map((user) => (
          <div className="chip active">
            <div className="avatar-small">
              <img src={user.avatar} alt={user.username} />
            </div>
            <span>{user.username}</span>
          </div>
        ))}
        {/* {/* <div className="chip">
          <div className="avatar-small">
            <img
              src="https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
              alt="Picasso"
            />
          </div>
          <span>Picasso</span>
        </div>
        <div className="chip">
          <div className="avatar-small">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
              alt="Van Gogh"
            />
          </div>
          <span>Van Gogh</span>
        </div> */}
      </div>
    </header>
  );
}

export default HeaderSection;

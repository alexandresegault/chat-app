import React from "react";
import "./Contact.css";
const name = "Connor Crawford";
const avatar = "https://randomuser.me/api/portraits/men/27.jpg";
const Contact = () => {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="avatar" />
      <div>
        <p className="name">{name}</p>
        <p className="status">
          <span className="status-online"></span>online
        </p>
      </div>
    </div>
  );
};

export default Contact;

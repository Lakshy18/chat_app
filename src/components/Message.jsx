import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://www.devop.pro/wp-content/uploads/2020/02/image-professionnelle-identite.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello </p>
        <img
          src="https://www.devop.pro/wp-content/uploads/2020/02/image-professionnelle-identite.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;

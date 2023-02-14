import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Gotu Talks</span>
      <div className="user">
        <img
          src="https://www.devop.pro/wp-content/uploads/2020/02/image-professionnelle-identite.jpg"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;

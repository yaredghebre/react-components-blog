import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="w-full bg-blue-500 px-11 flex justify-center items-center h-20">
        <ul className="w-full flex justify-between items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

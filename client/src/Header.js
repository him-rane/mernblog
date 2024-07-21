import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setUserInfo({});
    navigate("/login");
  };

  return (
    <header>
      <Link to="/">MenrnBlog</Link>
      <nav>
        {userInfo?.username && (
          <>
            <Link to="/create">Create</Link>
            <div onClick={handleLogout}>Logout</div>
          </>
        )}{" "}
        {!userInfo?.username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

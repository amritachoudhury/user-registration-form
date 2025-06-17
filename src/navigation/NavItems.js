import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const NavItems = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const btnName = isLoggedIn ? "Logout" : "Login";

  return (
    <>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/register-new-user">Register new user</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/contact-us">Contact us</Link>
      </ul>
      <Outlet />
    </>
  );
};

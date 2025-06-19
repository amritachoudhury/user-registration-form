import { Link, Outlet } from "react-router-dom";
import { ABOUT_US, CONTACT_US, HOME_PATH, REGISTER_NEW_USER_PATH } from "../utils/constants";

export const NavItems = () => {

  return (
    <>
      <ul>
        <Link to={`/${HOME_PATH}`}>Home</Link>
        <Link to={`/${REGISTER_NEW_USER_PATH}`}>Register new user</Link>
        <Link to={`/${ABOUT_US}`}>About us</Link>
        <Link to={`/${CONTACT_US}`}>Contact us</Link>
      </ul>
      <Outlet />
    </>
  );
};

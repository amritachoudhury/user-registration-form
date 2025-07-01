import { Link } from "react-router-dom";
import {
  ABOUT_US,
  CONTACT_US,
  HOME_PATH,
  REGISTER_NEW_USER_PATH,
  USER_CARD,
} from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

export const NavItems = () => {
  const data = useContext(UserContext);

  return (
    <div className="nav-items">
      <h4 className="header-user">
        Welcome
        <span className="user-name"> {data.loggedInUser}</span>
      </h4>
      <ul>
        <Link to={`/${HOME_PATH}`}>Home</Link>
        <Link to={`/${REGISTER_NEW_USER_PATH}`}>Register new user</Link>
        <Link to={`/${USER_CARD}`}>User cards display</Link>
        <Link to={`/${ABOUT_US}`}>About us</Link>
        <Link to={`/${CONTACT_US}`}>Contact us</Link>
      </ul>
    </div>
  );
};

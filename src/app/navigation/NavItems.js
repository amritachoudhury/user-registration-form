import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ABOUT_US,
  CONTACT_US,
  HOME_PATH,
  REGISTER_NEW_USER_PATH,
  SAVED_USERS,
  USER_CARD
} from "../utils/constants";
import UserContext from "../utils/UserContext";

export const NavItems = () => {
  const data = useContext(UserContext);

  // use a selector hook to subscribe to the store and read store data.

  const savedUsers = useSelector((store) => store.savedUsers.users);
  console.log("Saved Users", savedUsers);

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
        <Link to={`/${SAVED_USERS}`}>Saved users ({savedUsers.length})</Link>
        <Link to={`/${ABOUT_US}`}>About us</Link>
        <Link to={`/${CONTACT_US}`}>Contact us</Link>
      </ul>
    </div>
  );
};

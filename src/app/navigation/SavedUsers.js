import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeAllUsers, removeUser } from "../data-store/savedUsersSlice";

export default function SavedUsers() {
  const savedUsers = useSelector((store) => store.savedUsers.users);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="skill-sections">
        <span className="section-banner">Skills</span>
        {savedUsers.map((user) => {
          return (
            <div key={user.id} className="saved-user">
              {user.email}
              <CloseIcon className="close-icon" onClick={() => dispatch(removeUser(user.id))} />
            </div>
          );
        })}
      </div>
      <Button
        variant="contained"
        color="primary"
        className="submit"
        onClick={() => {
          dispatch(removeAllUsers());
        }}
      >
        Remove all users
      </Button>
    </div>
  );
}

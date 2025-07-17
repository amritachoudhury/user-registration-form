import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { USER_DETAIL } from "../utils/constants";

  // If emailVerified, return a HOC with Verified label in card.
  // Following is the HOC.
  export const verifiedUserCard = (UserCard) => {
    // HOC is nothing but a function that returns a component, which is basically a function.
    // Following is the component being returned by HOC.
    return (props) => {
      // in this returned functional component the actual jsx is contained.
      return (<div className="verified-user-card">
      <label className="verified-tag">Verified</label>
      <UserCard {...props}/>
      </div>)
    }
  }

export default function UserCard(userData) {
  const navigateToUser = useNavigate();

  const data = userData.userData;
  return (
    <div className="user-card">
      <img src={data?.avatar} />
      <h3>
        {data.firstName} {data.lastName}
      </h3>
      <h4>{data.email}</h4>
      <h4>Age: {data.age}</h4>
      <Button
        onClick={() => {
          navigateToUser(`/${USER_DETAIL}/${data.id}`)
        }}
      >
        View details
      </Button>
    </div>
  );
}

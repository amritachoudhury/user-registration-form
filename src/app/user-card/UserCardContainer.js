import { Button } from "@mui/material";
import { useEffect, useState, useContext, use } from "react";
import Skeleton from "../skeleton-load/Skeleton";
import useOnlineStatus from "../utils/useOnlineStatus";
import useUsersData from "../utils/useUsersData";
import UserCard, { verifiedUserCard } from "./UserCard";
import UserNotFound from "./UserNotFound";
import UserContext from "../utils/UserContext";

export default function UserCardContainer() {
  const [filteredUserDataList, setFilteredUserDataList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [isUserNotFound, setIsUserNotFound] = useState(false);
  const userDataList = useUsersData();
  const isOffline = useOnlineStatus();
  const VerifiedUserCard = verifiedUserCard(UserCard);
  const userContext = useContext(UserContext);

  // console.log('List: ', filteredUserDataList);

  useEffect(() => {
    setFilteredUserDataList(userDataList);
  }, [userDataList]);

  return !isOffline ? (
    <div className="user-container">
      <div className="search-container">
        <input
          name="search"
          value={searchString}
          id="search"
          placeholder="Enter search string"
          onChange={(e) => {
            setSearchString(e.target.value);
            userContext.setUserInfo({ FullName: e.target.value });
          }}
        />
        <Button
          onClick={() => {
            setSearchString("");
            setFilteredUserDataList(userDataList);
            setIsUserNotFound(false);
          }}
        >
          reset
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            const filteredList = searchString.length
              ? userDataList.filter(
                  (x) =>
                    x.firstName.includes(searchString) ||
                    x.lastName.includes(searchString)
                )
              : userDataList;
            setFilteredUserDataList(filteredList);
            setIsUserNotFound(!filteredList.length);
          }}
        >
          search user
        </Button>
      </div>
      {isUserNotFound ? (
        <UserNotFound />
      ) : !filteredUserDataList.length ? (
        <Skeleton />
      ) : (
        <div className="user-card-container">
          {filteredUserDataList.map((userData) => {
            /** if emailVerified return HOC VerifiedUserCard componet else return normal UserCard component */
            return userData.emailVerified ? (
              <VerifiedUserCard key={userData.id} userData={userData} />
            ) : (
              <UserCard key={userData.id} userData={userData} />
            );
          })}
        </div>
      )}
    </div>
  ) : (
    <h1>Looks like you are offline</h1>
  );
}

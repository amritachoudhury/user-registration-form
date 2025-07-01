import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import * as userMock from "../assets/user-mock.json";
import UserContext from "./utils/UserContext";

export default function AppLayout() {
  // Authentication code
  // Use authentication api to read userinfo and update userInfor state.

  const [userInfo, setUserInfo] = useState();

  const fetchUserInfo = async () => {
    const data = userMock.Data;
    setUserInfo(data);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedInUser: userInfo?.FullName,
      }}
    >
      <Header />
      <Outlet />
    </UserContext.Provider>
  );
}

import { useEffect, useState } from "react";

export default function useUsersData() {
  const [userDataList, setUserDataList] = useState([]);

  const fetchUsersData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/users`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setUserDataList(json);
    } catch (error) {
      console.error('Error fetching user data:', error);
      return;
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);
  return userDataList;
}

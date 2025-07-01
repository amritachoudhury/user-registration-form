import { useEffect, useState } from "react";

export default function useUserData(id) {
  const [userData, setUserData] = useState();
  const fetchUserData = async () => {
    try {
      if (!id) {
        throw new Error('User ID is required');
      }
      const response = await fetch(`http://localhost:4000/users/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setUserData(json);
    } catch (error) {
      console.error('Error fetching user data:', error);
      return;
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);
  return userData;
}

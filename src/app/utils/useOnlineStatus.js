import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  // if online return true
  // use online ebent listner

  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOffline(true);
    });
    window.addEventListener("online", () => {
      setIsOffline(false);
    });
  }, []);

  return isOffline;
}

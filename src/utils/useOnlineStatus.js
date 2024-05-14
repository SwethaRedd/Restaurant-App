import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online , return status
  useEffect(() => {
    // add event listener to check the status
    window.addEventListener("offline", () => {
      //update onlineStatus
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;

/***
 * finalize the contract :- input and outputs of the hook
 *
 * add event listeners to find out the online status
 * and add logic to findout the status
 *
 */

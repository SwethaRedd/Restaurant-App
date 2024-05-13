import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online , return status
  useEffect(() => {
    window.addEventListener("offline", () => {
      // onlineStatus
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  // boolean balue
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

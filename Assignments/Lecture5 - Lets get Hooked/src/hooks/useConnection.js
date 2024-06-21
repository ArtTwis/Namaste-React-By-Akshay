import { useEffect, useState } from "react";

const useConnection = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    let online = () => {
      setStatus(true);
    };
    let offline = () => {
      setStatus(false);
    };

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return status;
};

export default useConnection;

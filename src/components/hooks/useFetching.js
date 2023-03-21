import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const fetching = async (...args) => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        setIsLoading(true);
        await callback(...args);
      } catch (e) {
        setErr(e.message);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };
  return [fetching, isLoading, err];
};

import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import type { UserContextType } from "../types/User";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default useUser;

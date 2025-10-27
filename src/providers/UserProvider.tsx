import React, { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { UserData, UserContextType } from "../types/User";
import { parseUserData } from "../utils/userData";

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Import the JSON data
        const response = await import("../data.json");

        // Use type-safe parser to validate and parse the data
        const data = parseUserData(response.default);

        setData(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load user data";
        setError(errorMessage);
        console.error("Error loading user data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  let value: UserContextType;

  if (loading) {
    value = {
      data: null,
      loading: true,
      error: null,
    };
  } else if (error || !data) {
    value = {
      data: null,
      loading: false,
      error: error || "Failed to load user data",
    };
  } else {
    value = {
      data: data,
      loading: false,
      error: null,
    };
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext };

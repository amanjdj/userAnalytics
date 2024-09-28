/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import user from "../data/users.json";
import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [activeUserId, setActiveUserId] = useState("");
  const [isUserActive, setIsUserActive] = useState(false);

  const [activeUser] = users.filter((user) => user.userId === activeUserId);

  useEffect(function () {
    setUsers(user);
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        isUserActive,
        activeUserId,
        setActiveUserId,
        setIsUserActive,
        activeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("Problem");
  return context;
}

export { UserProvider, useUser };

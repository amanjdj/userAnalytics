/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
// import { useUser } from "./userContext";
import accountsData from "../data/accounts.json";
import { useUser } from "./userContext";
// import "../contexts/callsContext";
// import { useCalls } from "./callsContext";

const AccountsContext = createContext();

function AccountsProvider({ children }) {
  const [accounts, setAccounts] = useState([]);
  const { activeUser } = useUser();
  // const [filteredAccounts, setFilteredAccounts] = useState([]);
  // console.log(calls);

  const filteredAccounts = accounts.filter(
    (ac) => ac.territory === activeUser?.territory
  );
  // console.log(activeUser);

  // console.log(tableData);

  useEffect(function () {
    setAccounts(accountsData);
  }, []);
  // useEffect(
  //   function () {
  //     setFilteredAccounts(
  //       accounts.filter((ac) => ac.territory === activeUser?.territory)
  //     );
  //   },
  //   [activeUser, accounts]
  // );
  // console.log(filteredAccounts);
  return (
    <AccountsContext.Provider
      value={{ accounts, setAccounts, filteredAccounts }}
    >
      {children}
    </AccountsContext.Provider>
  );
}

function useAccounts() {
  const context = useContext(AccountsContext);
  if (context === undefined) throw new Error("Problem");
  return context;
}

export { AccountsProvider, useAccounts };

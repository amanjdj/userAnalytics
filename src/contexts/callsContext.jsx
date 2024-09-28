/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import callsData from "../data/calls.json";
// import { useAccounts } from "./accountsContext";

const CallsContext = createContext();
// console.log(callsData);

function CallsProvider({ children }) {
  const [calls, setCalls] = useState([]);

  useEffect(function () {
    setCalls(callsData);
  }, []);
  // console.log(calls);
  return (
    <CallsContext.Provider value={{ calls }}>{children}</CallsContext.Provider>
  );
}

function useCalls() {
  const context = useContext(CallsContext);

  if (context === undefined) throw new Error("Problem with calls context");

  return context;
}

export { CallsProvider, useCalls };

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useAccounts } from "./accountsContext";
import { useCalls } from "./callsContext";
import { useEmails } from "./emailsContext";
import { useUser } from "./userContext";

const FinalContext = createContext();

function FinalProvider({ children }) {
  const { calls } = useCalls();
  const { emails } = useEmails();
  const { filteredAccounts } = useAccounts();
  const { activeUser } = useUser();
  const [selectedTypeCalls, setSelectedTypeCalls] = useState("");

  let filteredCalls = [];
  filteredAccounts.forEach((ac) => {
    filteredCalls.push(...calls.filter((call) => call.accountId === ac.id));
  });
  const callTypes = {
    phone: filteredCalls.filter((call) => call.callType === "Phone"),
    face: filteredCalls.filter((call) => call.callType === "Face to Face"),
    inPerson: filteredCalls.filter((call) => call.callType === "InPerson"),
    email: filteredCalls.filter((call) => call.callType === "Email"),
    other: filteredCalls.filter((call) => call.callType === "Other"),
  };
  useEffect(
    function () {
      setSelectedTypeCalls("");
    },
    [activeUser]
  );

  return (
    <FinalContext.Provider
      value={{
        filteredCalls,
        callTypes,
        selectedTypeCalls,
        setSelectedTypeCalls,
      }}
    >
      {children}
    </FinalContext.Provider>
  );
}

function useFinal() {
  const context = useContext(FinalContext);
  if (context === undefined) throw new Error("Problem");
  return context;
}

export { FinalProvider, useFinal };

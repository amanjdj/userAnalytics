/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import { useContext } from "react";
// import { useState } from "react";
// import user from "../data/users.json";
import { createContext } from "react";
import { useCalls } from "./callsContext";
import { useEmails } from "./emailsContext";
import { useAccounts } from "./accountsContext";

const UserTerritoryContext = createContext();

function UserTerritoryProvider({ children }) {
  const { calls } = useCalls();
  const { emails } = useEmails();
  const { filteredAccounts } = useAccounts();

  const filteredData = filteredAccounts.map((acc) => {
    const cal = calls
      .filter((call) => call.accountId === acc.id)
      .map((call) => {
        return { ...call, callDate: Date.parse(call.callDate) };
      });
    const ema = emails
      .filter((email) => email.accountId === acc.id)
      .map((email) => {
        return { ...email, emailDate: Date.parse(email.emailDate) };
      });
    return { calls: cal, emails: ema };
  });

  const tableData = filteredData.map((data) => {
    return {
      accountId: data.calls[0].accountId,
      accountName: filteredAccounts.filter(
        (acc) => acc.id === data.calls[0].accountId
      )[0].name,
      totalCalls: data.calls.length,
      latestCallDate: Math.max(...data.calls.map((call) => call.callDate)),
      totalEmails: data.emails.length,
      latestEmailDate: Math.max(...data.emails.map((email) => email.emailDate)),
    };
  });
  return (
    <UserTerritoryContext.Provider
      value={{
        tableData,
      }}
    >
      {children}
    </UserTerritoryContext.Provider>
  );
}

function useAccountsTable() {
  const context = useContext(UserTerritoryContext);
  if (context === undefined) throw new Error("Problem");
  return context;
}

export { UserTerritoryProvider, useAccountsTable };

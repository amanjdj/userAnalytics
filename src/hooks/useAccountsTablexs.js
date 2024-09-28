/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useAccounts } from "./accountsContext";
import { useCalls } from "./callsContext";
import { useEmails } from "./emailsContext";

function useAccountsTable() {
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

  return tableData;
}

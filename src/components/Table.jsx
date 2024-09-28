/* eslint-disable no-unused-vars */
// import { useState } from "react";

/* eslint-disable react/prop-types */
function Table({ filteredAccounts }) {
  const accounts = filteredAccounts.map((acc) => {
    // const calldate = new Date(acc.latestCallDate).toLocaleDateString("en-us", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });
    const calldate = new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(acc.latestCallDate);
    const emailldate = new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(acc.latestEmailDate);
    // const emailldate = new Date(acc.latestEmailDate).toLocaleDateString(
    //   "en-us",
    //   { year: "numeric", month: "long", day: "numeric" }
    // );
    return { ...acc, latestCallDate: calldate, latestEmailDate: emailldate };
  });
  return (
    <table className="mb-3 table-auto  bg-white   size-full  ">
      <thead className="bg-blue-700 size-full">
        <tr className="text-cyan-50 ">
          <th>Account Name</th>
          <th>Total Calls</th>
          <th>Total Emails</th>
          <th>Latest Call Date</th>
          <th>Latest Email Date</th>
        </tr>
      </thead>
      <tbody className="size-full">
        {accounts.map((acc) => {
          return (
            <tr key={acc.accountId} className="text-center">
              <td>{acc.accountName}</td>
              <td>{acc.totalCalls}</td>
              <td>{acc.totalEmails}</td>
              <td>{acc.latestCallDate}</td>
              <td>{acc.latestEmailDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
//
// {
//   filteredAccounts.map((acc) => (
//     <tr key={acc.id} className="text-center">
//       <td>Aman</td>
//       {/* <td>{acc.accountName}</td>
//     <td>{acc.totalCalls}</td>
//     <td>{acc.totalEmails}</td>
//     <td>{acc.latestCall}</td>
//     <td>{acc.latestEmail}</td> */}
//     </tr>
//   ));
// }

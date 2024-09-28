// import { useState } from "react";

import { useAccounts } from "../contexts/accountsContext";

/* eslint-disable react/prop-types */
function Table({ filteredCalls }) {
  const { filteredAccounts } = useAccounts();

  if (filteredCalls?.length > 0)
    return (
      <table className="mb-3 table-auto  bg-white   size-full p-2 ">
        <thead className="bg-blue-700">
          <tr className="text-blue-50">
            <th>Call ID</th>
            <th>Account Name</th>
            <th>Call Date</th>
            <th>Call Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCalls?.map((acc) => (
            <tr key={acc.id} className="text-center">
              <td>{acc.id}</td>
              <td>
                {
                  filteredAccounts?.filter((a) => a.id === acc.accountId)[0]
                    ?.name
                }
              </td>

              <td>
                {new Intl.DateTimeFormat("en-IN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }).format(Date.parse(acc.callDate))}
              </td>
              <td>{acc.callStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  // const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // return (
  //   <table className="mb-3 table-auto  bg-white   size-full p-2 ">
  //     <thead className="bg-blue-700">
  //       <tr className="text-blue-50">
  //         <th>Call ID</th>
  //         <th>Account Name</th>
  //         <th>Call Date</th>
  //         <th>Call Status</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {a.map((acc) => (
  //         <tr key={acc} className="text-center">
  //           <td>{"accountName"}</td>
  //           <td>{"accountName"}</td>
  //           <td>{"accountName"}</td>
  //           <td>{"accountName"}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );
}

export default Table;

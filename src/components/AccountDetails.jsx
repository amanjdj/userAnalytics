// import { useEffect } from "react";
// import { useAccounts } from "../contexts/accountsContext";

import { useEffect, useState } from "react";
import { useUser } from "../contexts/userContext";
import Button from "./Button";
import Table from "./Table";
import { useAccountsTable } from "../contexts/userTerritoryContext";
// import { useFinal } from "../contexts/finalContext";
// import { useAccountsTable } from "../hooks/useAccountsTablexs";
// import { useUser } from "../contexts/userContext";

function AccountDetails() {
  const { tableData } = useAccountsTable();

  const { activeUser } = useUser();

  const perPageEntries = 10;
  const totalPages = Math.ceil(tableData.length / perPageEntries);
  const [currentPage, setCurrentPage] = useState(1);

  const lastEntryIndex = currentPage * perPageEntries;
  const firstEntryIndex = (currentPage - 1) * perPageEntries;
  // console.log(firstEntryIndex, lastEntryIndex);
  const currentPageAccounts = tableData.slice(
    firstEntryIndex,
    lastEntryIndex > tableData.length ? tableData.length : lastEntryIndex
  );
  function handlePrevButton() {
    if (currentPage > 1) setCurrentPage((cp) => cp - 1);
  }
  function handleNextButton() {
    if (currentPage < totalPages) setCurrentPage((cp) => cp + 1);
  }

  useEffect(
    function () {
      setCurrentPage(1);
    },
    [activeUser]
  );
  // console.log(currentPage);

  return (
    <div className="bg-blue-50 p-4">
      <h4 className="text-center text-lg font-bold">{`${activeUser?.userName}'s Territory Account Details`}</h4>
      <div className="p-2  m-10">
        <Table filteredAccounts={currentPageAccounts} />
        <div className="flex justify-between">
          {currentPage == 1 ? (
            <Button cl="hidden"></Button>
          ) : (
            <Button handler={handlePrevButton}>Previous</Button>
          )}
          <span>{`${currentPage}/${totalPages}`}</span>
          {currentPage == totalPages ? (
            <Button cl="hidden"></Button>
          ) : (
            <Button handler={handleNextButton}>Next</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;

// import { useEffect } from "react";

import { useEffect, useState } from "react";
// import { useAccounts } from "../contexts/accountsContext";
// import { useUser } from "../contexts/userContext";
import Button from "./Button";
import OtherTable from "./OtherTable";
// import { useFinal } from "../contexts/finalContext";
// import { useCalls } from "../contexts/callsContext";
// import { useFinal } from "../contexts/finalContext";
// import { useUser } from "../contexts/userContext";
import { useFinal } from "../contexts/finalContext";
// import { useUser } from "../contexts/userContext";

function PhoneDetails() {
  // const { selectedTypeCalls.data } = useFinal();

  const { selectedTypeCalls } = useFinal();

  // const hide =
  //   "bg-blue-50 p-4 flex-1  border-b-gray-400 rounded-lg shadow-md invisible";

  const perPageEntries = 10;
  const totalPages = Math.ceil(
    selectedTypeCalls?.data?.length / perPageEntries
  );
  const [currentPage, setCurrentPage] = useState(1);

  const lastEntryIndex = currentPage * perPageEntries;
  const firstEntryIndex = (currentPage - 1) * perPageEntries;
  // console.log(firstEntryIndex, lastEntryIndex);
  const currentPageAccounts = selectedTypeCalls?.data?.slice(
    firstEntryIndex,
    lastEntryIndex > selectedTypeCalls?.data?.length
      ? selectedTypeCalls?.data?.length
      : lastEntryIndex
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
    [selectedTypeCalls]
  );

  return (
    <div
      className={
        selectedTypeCalls?.data?.length > 0
          ? "bg-blue-50 p-4 flex-1  border-b-gray-400 rounded-lg shadow-md"
          : "bg-blue-50 p-4 flex-1  border-b-gray-400 rounded-lg shadow-md invisible min-h-full"
      }
    >
      <h4 className="text-center font-bold uppercase">{`${selectedTypeCalls.name} Details`}</h4>
      <div className="p-2  m-2">
        {selectedTypeCalls ? (
          <OtherTable filteredCalls={currentPageAccounts} />
        ) : (
          ""
        )}
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

export default PhoneDetails;

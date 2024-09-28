import { useUser } from "../contexts/userContext";
// import AccountDetails from "./AccountDetails";
import ActiveLayout from "./ActiveLayout";
import Navbar from "./Navbar";
import NoUserMessage from "./NoUserMessage";

function AppLayout() {
  const { isUserActive, activeUserId } = useUser();
  return (
    <>
      <Navbar />
      {isUserActive && activeUserId ? (
        <ActiveLayout />
      ) : (
        <>
          <NoUserMessage message={"Please Select a User to View Analytics"} />
          <NoUserMessage
            message={"Please Select a User to view account details"}
          />
        </>
      )}
    </>
  );
}

export default AppLayout;

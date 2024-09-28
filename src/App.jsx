import "./App.css";
import AppLayout from "./components/AppLayout.jsx";
import { AccountsProvider } from "./contexts/accountsContext.jsx";

// import "./contexts/userContext.jsx";
// import "./contexts/accountsContext.jsx";
import { UserProvider } from "./contexts/userContext.jsx";
import { CallsProvider } from "./contexts/callsContext.jsx";
import { FinalProvider } from "./contexts/finalContext.jsx";
import { EmailsProvider } from "./contexts/emailsContext.jsx";
import { UserTerritoryProvider } from "./contexts/userTerritoryContext.jsx";

function App() {
  return (
    <UserProvider>
      <EmailsProvider>
        <AccountsProvider>
          <CallsProvider>
            <FinalProvider>
              <UserTerritoryProvider>
                <AppLayout />
              </UserTerritoryProvider>
            </FinalProvider>
          </CallsProvider>
        </AccountsProvider>
      </EmailsProvider>
    </UserProvider>
  );
}

export default App;

/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import emailsData from "../data/emails.json";

const EmailsContext = createContext();

function EmailsProvider({ children }) {
  const [emails, setEmails] = useState();

  useEffect(function () {
    setEmails(emailsData);
  }, []);

  return (
    <EmailsContext.Provider value={{ emails }}>
      {children}
    </EmailsContext.Provider>
  );
}

function useEmails() {
  const context = useContext(EmailsContext);

  if (context === undefined) throw new Error("Problem with emails context");

  return context;
}

export { EmailsProvider, useEmails };

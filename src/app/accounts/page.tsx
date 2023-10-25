"use client";
import React, { useEffect } from "react";
import useAccount from "./hooks/useAccount";
import TemplatePage from "./template/TemplatePage";

export default function Accounts() {
  const { getAccounts, accounts } = useAccount();

  useEffect(() => {
    getAccounts();
  }, []);

  const sharedProps = {
    accounts,
  };
  return (
    <div>
      <h1>Accounts list</h1>
      <TemplatePage {...sharedProps} />
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import useAccount from "./hooks/useAccount";
import AccountsList from "./components/accountsList";

export default function Accounts(props: any) {
  const { getAccounts, accounts } = useAccount();

  const accountsData = props?.accounts ?? accounts;

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div>
      <h1>Accounts list</h1>
      <AccountsList accounts={accountsData} />
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import useAccount from "./hooks/useAccount";
import TemplatePage from "./template/TemplatePage";

export default function Accounts() {
  const { getAccounts, filter, setFilter, accountsList } = useAccount();

  useEffect(() => {
    getAccounts();
  }, []);

  const sharedProps = {
    filter,
    setFilter,
    accountsList,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Accounts list</h1>
      <input data-testid="input-search" placeholder="search" onChange={(e: any) => setFilter(e.target.value)} />

      <TemplatePage {...sharedProps} />
    </div>
  );
}

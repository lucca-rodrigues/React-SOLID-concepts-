"use client";
import { useState } from "react";
import { AccountServices } from "@domain/accounts";

export default function useAccount(props?: any) {
  const service = new AccountServices();
  const [accounts, setAccounts] = useState<any>([]);

  async function getAccounts() {
    const response = await service.get();

    setAccounts(response);
  }

  return {
    getAccounts,
    accounts,
    setAccounts,
  };
}

"use client";
import { useState } from "react";
import { AccountUseCases } from "@domain/accounts";

export default function useAccount() {
  const useCase = new AccountUseCases();
  const [accounts, setAccounts] = useState<any>([]);

  async function getAccounts() {
    const response = await useCase.get();

    setAccounts(response);
  }

  return {
    getAccounts,
    accounts,
    setAccounts,
  };
}

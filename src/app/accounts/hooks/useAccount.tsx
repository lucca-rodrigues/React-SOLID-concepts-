"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { AccountServices } from "@domain/accounts";
import { TAccount } from "@domain/accounts/models";

export default function useAccount(props?: any) {
  const service = new AccountServices();
  const [accounts, setAccounts] = useState<any>([]);
  const [filter, setFilter] = useState<string>("");
  const accountsList = filter?.length > 1 ? accounts.filter((item: TAccount) => item?.name?.toUpperCase().includes(filter?.toUpperCase())) : accounts;

  async function getAccounts() {
    const response = await service.get();

    setAccounts(response);
  }

  return {
    getAccounts,
    accounts,
    setAccounts,
    filter,
    setFilter,
    accountsList,
  };
}

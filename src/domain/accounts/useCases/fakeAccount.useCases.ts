import { IAccountUseCases, TAccount } from "@domain/accounts/models";

const dbMemmory = [
  {
    id: 1,
    name: "Cristiane Juliana da Costa",
    email: "cristiane_juliana_dacosta@tintasvalecores.com.br",
  },
  {
    id: 2,
    name: "Thales Luís André Pinto",
    email: "tharles_luiz@lojapetline.com.br",
  },
];
export default class FakeAccountUseCases implements IAccountUseCases {
  async get() {
    return dbMemmory;
  }

  post(account: TAccount) {
    const newUserId = dbMemmory.length + 1;
    dbMemmory.push({
      id: newUserId,
      ...account,
    });
    return dbMemmory;
  }

  update(accountId: number, account: TAccount): Promise<TAccount | null> {
    const selectedAccount = dbMemmory.find((account) => account.id === accountId);
    if (selectedAccount) {
      selectedAccount.name = account.name;
      selectedAccount.email = account.email;

      return Promise.resolve(selectedAccount);
    }
    return Promise.resolve(null);
  }
  delete(accountId: number) {
    const result = dbMemmory.filter((account) => account.id !== accountId);
    return result;
  }
}

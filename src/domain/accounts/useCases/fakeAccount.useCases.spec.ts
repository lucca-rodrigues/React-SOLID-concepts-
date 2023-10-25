import { FakeAccountUseCases } from "..";
import { TAccount } from "@domain/accounts/models";

const fakeAccountUseCase = new FakeAccountUseCases();
describe("Fake account useCases", () => {
  it("Should be render fake accounts", async () => {
    const accountsData: TAccount[] = await fakeAccountUseCase.get();
    expect(accountsData.length).toEqual(2);
  });
  it("Should be create account", async () => {
    const account: TAccount = {
      name: "João silva",
      email: "joaosilva@email.com",
    };
    const accountsData: TAccount[] = await fakeAccountUseCase.post(account);

    expect(accountsData.length).toEqual(3);
    expect(accountsData[2].name).toEqual(account.name);
    expect(accountsData[2].email).toEqual(account.email);
  });
  it("Should be update account", async () => {
    const accountId = 3;
    const account: TAccount = {
      name: "João silva",
      email: "joaosilva@email.com",
    };
    const accountData: TAccount | null = await fakeAccountUseCase.update(accountId, account);

    expect(accountData).not.toBeNull();
    if (accountData) {
      expect(accountData.name).toEqual(account.name);
      expect(accountData.email).toEqual(account.email);
    }
  });
  // it("Should be delete account", () => {});
});

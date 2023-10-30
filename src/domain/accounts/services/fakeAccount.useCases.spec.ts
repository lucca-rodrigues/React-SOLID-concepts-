import { FakeAccountServices } from "..";
import { TAccount } from "@domain/accounts/models";

const fakeAccountService = new FakeAccountServices();
describe("Fake account useCases", () => {
  it("Should be render fake accounts", async () => {
    const accountsData: TAccount[] = await fakeAccountService.get();
    expect(accountsData.length).toEqual(2);
  });
  it("Should be create account", async () => {
    const account: TAccount = {
      name: "João silva",
      email: "joaosilva@email.com",
    };
    const accountsData: TAccount[] = await fakeAccountService.post(account);

    expect(accountsData.length).toEqual(3);
    expect(accountsData[2].name).toEqual(account.name);
    expect(accountsData[2].email).toEqual(account.email);
  });
  it("Should be update account", async () => {
    const accountId = 3;
    const account: TAccount = {
      name: "João silva prado",
      email: "joaosilva@email.com",
    };
    const accountData: TAccount | string = await fakeAccountService.update(accountId, account);

    if (typeof accountData === "string") {
      throw new Error(accountData);
    }

    expect(accountData.name).toEqual(account.name);
    expect(accountData.email).toEqual(account.email);
  });

  it("Should be not update account", async () => {
    const accountId = 10;
    const account: TAccount = {
      name: "João silva prado",
      email: "joaosilva@email.com",
    };
    const accountData: TAccount | string = await fakeAccountService.update(accountId, account);

    expect(accountData).toEqual("ID Not found");
  });

  it("Should be delete account", () => {
    const accountId = 3;
    const accountsData: TAccount[] = fakeAccountService.delete(accountId);

    expect(accountsData.length).toEqual(2);
    expect(accountsData[3]).toBeFalsy();

    expect(accountsData).not.toContain(accountId);
  });
});

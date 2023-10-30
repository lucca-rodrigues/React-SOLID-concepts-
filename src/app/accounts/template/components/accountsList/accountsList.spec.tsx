import { render, screen } from "@testing-library/react";
import AccountsList from ".";
import { FakeAccountServices } from "@domain/accounts";
import { TAccount } from "@domain/accounts/models";

const fakeAccountService = new FakeAccountServices();
describe("Accounts list component", () => {
  it("Should be render accounts list component", async () => {
    render(<AccountsList accountsList={[]} />);
  });

  it("Should be render accounts  not found", async () => {
    render(<AccountsList accountsList={[]} />);

    const notFoundMessage = await screen.findByTestId("account-not-found");
    expect(notFoundMessage.textContent).toEqual("No accounts found.");
  });

  it("Should be render accounts list", async () => {
    const accountsData: TAccount[] = await fakeAccountService.get();

    render(<AccountsList accountsList={accountsData} />);

    expect(accountsData.length).toEqual(2);
  });

  it("Should be list item", async () => {
    const accountsData: TAccount[] = await fakeAccountService.get();

    render(<AccountsList accountsList={accountsData} />);

    const listItem = await screen.findAllByTestId("account-list-item");
    expect(listItem.length).toEqual(2);

    const validateFirstItem = listItem[0].innerHTML.includes(accountsData[0].name);

    expect(validateFirstItem).toBeTruthy();

    accountsData.forEach((account: TAccount) => {
      const accountNameElement = screen.getByText(account.name);
      expect(accountNameElement.textContent).toEqual(account.name);
    });
  });
});

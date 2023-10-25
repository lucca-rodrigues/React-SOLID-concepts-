import { render, screen } from "@testing-library/react";
import AccountsList from ".";
import { FakeAccountUseCases } from "@domain/accounts";
import { TAccount } from "@domain/accounts/models";

const fakeAccountUseCase = new FakeAccountUseCases();
describe("Accounts list component", () => {
  it("Should be render accounts list component", async () => {
    render(<AccountsList accounts={[]} />);
  });

  it("Should be render accounts  not found", async () => {
    render(<AccountsList accounts={[]} />);

    const notFoundMessage = await screen.findByTestId("account-not-found");
    expect(notFoundMessage.textContent).toEqual("No accounts found.");
  });

  it("Should be render accounts list", async () => {
    const accountsData: TAccount[] = await fakeAccountUseCase.get();

    render(<AccountsList accounts={accountsData} />);

    expect(accountsData.length).toEqual(2);
  });
});
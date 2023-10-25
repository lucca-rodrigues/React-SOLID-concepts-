import React from "react";
import { render, screen } from "@testing-library/react";
import Accounts from "./page";
import { FakeAccountUseCases } from "../../domain/accounts";

const fakeAccountUseCase = new FakeAccountUseCases();

describe("Accounts Component", () => {
  it("Should be render accounts page", () => {
    const accountsData = fakeAccountUseCase.get();

    render(<Accounts accounts={accountsData} />);

    const titlePage = screen.getByText(/Accounts list/i).innerHTML;

    expect(screen.findAllByTestId("Accounts list")).toBeTruthy();
    expect(titlePage).toEqual("Accounts list");
  });

  it("Should be render accounts not found", async () => {
    render(<Accounts accounts={[]} />);

    const notFoundMessage = await screen.findByTestId("account-not-found");

    expect(notFoundMessage).toBeTruthy();
    expect(notFoundMessage.textContent).toEqual("No accounts found.");
  });

  it("Should display account names", async () => {
    const accountsData = await fakeAccountUseCase.get();

    render(<Accounts accounts={accountsData} />);

    accountsData.forEach((account) => {
      const accountNameElement = screen.getByText(account.name);
      console.log("account", account);

      expect(accountNameElement.textContent).toEqual(account.name);
    });

    expect(accountsData.length).toEqual(4);
  });
});

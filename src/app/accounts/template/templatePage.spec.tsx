import React from "react";
import { render, screen } from "@testing-library/react";
import TemplatePage from "./TemplatePage";
import { FakeAccountServices } from "../../../domain/accounts";
import { TAccount } from "@domain/accounts/models";

const fakeAccountService = new FakeAccountServices();

describe("Accounts Component", () => {
  it("Should be render accounts page", async () => {
    const accountsData: TAccount[] = await fakeAccountService.get();

    const sharedProps = {
      accounts: accountsData,
    };

    render(<TemplatePage {...sharedProps} />);
  });

  it("Should be render accounts not found", async () => {
    render(<TemplatePage accounts={[]} />);

    const notFoundMessage = await screen.findByTestId("account-not-found");

    expect(notFoundMessage).toBeTruthy();
    expect(notFoundMessage.textContent).toEqual("No accounts found.");
  });

  it("Should display account names", async () => {
    const accountsData: TAccount[] = await fakeAccountService.get();

    render(<TemplatePage accounts={accountsData} />);

    accountsData.forEach((account: TAccount) => {
      const accountNameElement = screen.getByText(account.name);

      expect(accountNameElement.textContent).toEqual(account.name);
    });
  });
});

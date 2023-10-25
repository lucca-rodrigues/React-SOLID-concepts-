// import "@testing-library/jest-dom";
// import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
// import Accounts from "./page";
// import { FakeAccountUseCases } from "../../domain/accounts";

// const fakeAccountUseCase = new FakeAccountUseCases();

// describe("Accounts page", () => {
//   // it("Should be render accounts not found", async () => {
//   //   const useAccountMock = jest.fn(() => {
//   //     return {
//   //       getAccounts: jest.fn(),
//   //       accounts: [],
//   //       setAccounts: jest.fn(),
//   //     };
//   //   });

//   //   render(<Component useAccount={useAccountMock} />);

//   //   await waitFor(() => screen.getByText("Accounts list"));

//   //   const accountItems = screen.queryAllByTestId("account-list-item");

//   //   expect(accountItems).toHaveLength(0);

//   //   // Certifique-se de que nenhum elemento foi encontrado antes de tentar acessar o primeiro.
//   //   expect(accountItems.length).toBe(0);

//   //   // Alternativamente, você pode verificar se o elemento "No accounts found." está presente.
//   //   expect(screen.getByText("No accounts found.")).toBeInTheDocument();
//   // });

//   it("Should be render account page", async () => {
//     const getAccounts = fakeAccountUseCase.get();

//     const useAccountMock = jest.fn(() => {
//       return {
//         getAccounts: jest.fn(),
//         accounts: getAccounts,
//         setAccounts: jest.fn(),
//       };
//     });

//     // render(<Component useAccount={useAccountMock} />);
//     // render(<Component useAccount={useAccountMock} />);
//     // const {} = render(<Accounts useAccount={useAccountMock} />);
//     render(<Accounts />);
//     expect(screen.getByText(/Tereza Alice Sophia Brito/i)).toBeInTheDocument();
//     // const accountList = screen.getByTestId("account-list");
//     // const listItems = screen.getByRole("list");

//     // const { getAllByRole } = within(listItems);

//     // screen.debug(listItems);

//     // const items = getAllByRole("listitem");

//     // expect(items.length).not.toBe(2);
//     // await waitFor(() => screen.getByText("Accounts list"));

//     // expect(accountList).toBeInTheDocument();
//     // expect(accountList.children.length).toBe(2);
//   });
// });

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
    const accountsData = fakeAccountUseCase.get();

    render(<Accounts accounts={accountsData} />);

    accountsData.forEach((account) => {
      const accountNameElement = screen.getByText(account.name);

      expect(accountNameElement.textContent).toEqual(account.name);
    });
  });
});

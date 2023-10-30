describe("E2E test - handle accounts page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/accounts");
  });
  it("should be display page and not found accounts", () => {
    cy.get("h1").should("contain", "Accounts list");
    cy.get('[data-testid="account-not-found"]').should("contain", "No accounts found");
  });
  it("should be display account list itens", () => {
    cy.get('[data-testid="account-list-item"]').should("have.length", 4);
  });

  it("should be search not found search", () => {
    cy.get('[data-testid="input-search"]').type("Pedro");

    cy.get('[data-testid="account-list-item"]').should("have.length", 0);
    cy.get('[data-testid="account-not-found"]').should("contain", "No accounts found");
  });

  it("should be search result", () => {
    cy.get('[data-testid="input-search"]').type("Cristiane");

    cy.get('[data-testid="account-list-item"]').should("have.length", 1);
    cy.get('[data-testid="account-list-item"]').should("contain", "Cristiane");
  });
});

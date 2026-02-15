describe("REGON search (GUS) – negative scenario", () => {
  beforeEach(() => {
    cy.openRegonSearch();
  });

  it("shows validation message for invalid REGON", () => {
    cy.searchByRegon("010101012"); // 9-cyfrowa, nieprawidłowa wartość REGON-u

    // Asercja (odporna na ewentualne, przyszłe drobne zmiany w treści komunikatu)
    cy.expectInvalidRegonMessage();
  });
});
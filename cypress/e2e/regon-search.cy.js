describe("REGON search (GUS) – negative scenario", () => {
  beforeEach(() => {
    cy.openRegonSearch();
  });

  it("shows validation message for invalid REGON", () => {
    cy.searchByRegon("350637551");

    // Asercja po pojawieniu się komunikatu walidacyjnego (odpowrna na ewentualne przyszłe
    // drobne zmiany w treści komunikatu)
    cy.expectInvalidRegonMessage();
  });
});
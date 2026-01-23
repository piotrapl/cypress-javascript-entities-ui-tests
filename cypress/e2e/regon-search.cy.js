describe("REGON search (GUS)", () => {
  beforeEach(() => {
    cy.openRegonSearch();
  });

  it("Negative: invalid REGON shows validation message (robust assertion)", () => {
    cy.searchByRegon("123456789");
    cy.expectInvalidRegonMessage();
  });

  it("Positive: valid REGON finds RMF company (robust assertion)", () => {
    cy.searchByRegon("350637551");
    cy.expectCompanyFoundLikeRmf();

    // Extra safety: ensure we did NOT land on the invalid-regON message state.
    cy.contains(/nieprawidł/i).should("not.exist");
  });
});
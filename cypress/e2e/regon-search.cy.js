/*
  Testy dla wyszukiwarki REGON (GUS) – scenariusz negatywny
  Przypadek testowy: Nieprawidłowy numer REGON
  Cel: Sprawdzenie, czy system poprawnie reaguje na nieprawidłowy numer REGON
  
  describe  - oznacza grupę testów, 
  it        - definiuje pojedynczy przypadek testowy  
  () => { ... } - funkcja strzałkowa (arrow function), która zawiera kod testu
   to jest standardowa struktura testów w Cypress, która pozwala na organizację i czytelność testów.
   funkcja strzałkowa to sposób definiowania funkcji anonimowych, 
   bardziej zwięzły niż tradycyjna składnia funkcji.
   pozwala na łatwiejsze zarządzanie kontekstem `this` w testach, 
    - to szczególnie przydatne przy testach asynchronicznych, powszechne w testach end-to-end,
     gdzie często trzeba czekać np. na odpowiedzi z serwera 

    w tym przypadku używamy funkcji strzałkowej do zdefiniowania logiki testu,
    co pozwala na bardziej przejrzysty i zwięzły kod testowy.

    Sam czas odpowiedzi jest krótki.
*/
    
describe("REGON search (GUS) – negative scenario", () => {
  beforeEach(() => {
    cy.openRegonSearch();
  });

  it("shows validation message for invalid REGON", () => {
    cy.searchByRegon("123456789"); // 9-cyfrowa, nieprawidłowa wartość REGON-u

    // Asercja (odporna na ewentualne, przyszłe drobne zmiany w treści komunikatu)
    cy.expectInvalidRegonMessage();
  });
});
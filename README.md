### Co robi ten projekt?

Ten projekt to minimalny przykład automatyzacji testów E2E w Cypress (JavaScript) dla publicznej wyszukiwarki REGON (GUS).

## Testy automatyczne sprawdzają:

wyszukiwanie podmiotu po numerze REGON

obsługę błędnego numeru REGON

poprawne wyświetlenie danych firmy dla poprawnego REGON

## Projekt zawiera 2 testy:

Negatywny – niepoprawny REGON → komunikat walidacyjny

Pozytywny – poprawny REGON → dane firmy RADIO MUZYKA FAKTY GRUPA RMF…

Testy są krótkie i czytelne

stosują zasadę DRY

używają odpornych asercji (niezależnych od drobnych zmian treści)

### Wymagania

Node.js ≥ 16

npm (instalowany razem z Node.js)

System: Windows / macOS / Linux

Przeglądarka: Chrome / Edge (domyślnie)

### Przygotowanie środowiska

# 1. Klonowanie repozytorium
git clone <repo-url>
cd cypress-regon

# 2. Instalacja zależności
npm install

### Uruchamianie testów
Tryb interaktywny (GUI)
npm run cy:open

Tryb headless (CI / terminal)
npm run cy:run

### Co można zoptymalizować / dodać ?

Page Object Model (POM)

Testy danych skrajnych (8-, 9-, 14-cyfrowe REGON-y)

Testy API (jeśli endpoint GUS jest dostępny)

Obsługa CAPTCHA / throttlingu (jeśli się pojawi)

Raporty testowe (Allure / Mochawesome)

Równoległe uruchamianie testów w CI

Testy dostępności (a11y)

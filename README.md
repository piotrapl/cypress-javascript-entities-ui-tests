### Co robi ten projekt?

Ten projekt to minimalny przykład automatyzacji testów E2E w Cypress (JavaScript) dla publicznej wyszukiwarki REGON (GUS).

## Testy automatyczne sprawdzają:

Wyszukiwanie podmiotu po numerze REGON
- obsługę przypadku podania przezużytkownika błędnego numeru REGON

## Projekt zawiera 1 test:

Negatywny – wprowadzono niepoprawny nr REGON → prezentoway jest odpowiedni komunikat

Testy są krótkie i czytelne

stosują zasadę DRY (Don't Repet Yourself)

używają odpornych asercji (niezależnych od drobnych zmian treści)

### Wymagania

Node.js ≥ 16

npm (instalowany razem z Node.js)

działa w systemach: Windows / macOS / Linux

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

Testy danych skrajnych (np. liczba znaków inna niż 9 lub 14) 

Testy API (jeśli endpoint GUS jest dostępny)

Obsługa CAPTCHA / throttlingu (jeśli się pojawi)

Raporty testowe (Allure / Mochawesome)

Równoległe uruchamianie testów w CI

Testy dostępności (a11y)

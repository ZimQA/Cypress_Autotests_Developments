import * as data from "../../login_data/default_data.json";
import * as pokemon_log_page from "../../locators/pokemon_log_page.json"
import * as pokemon_checkForm_page from "../../locators/pokemon_checkForm_page.json"

// Процесс заполнения реквизитов
function fillCheckoutForm() {
  cy.get(pokemon_checkForm_page.number).type(data.nom_karty);
  cy.get(pokemon_checkForm_page.srok_karty).type(data.srok_karty);
  cy.get(pokemon_checkForm_page.kod_karty).type(data.cvv);
  cy.get(pokemon_checkForm_page.name).type(data.name);
  cy.get(pokemon_checkForm_page.oplatit).click();

  cy.get(pokemon_checkForm_page.kod_push).type(data.kod_push);
  cy.get(pokemon_checkForm_page.oplatit_kod_push).click();

  cy.get(".payment_form_card_form")
    .contains("Покупка прошла успешно")
    .should("be.visible");

  //Вернуться в магазин
  cy.get(pokemon_checkForm_page.vernutsa_v_mag).click();
}

describe("E2E Для покемонов", function () {
  it("Покупка всех доступных аватаров по порядку", function () {
    cy.visit("/");

    cy.get(pokemon_log_page.email).type(data.login_pokemons);
    cy.get(pokemon_log_page.password).type(data.password_pokemons);
    cy.get(pokemon_log_page.voiti).click();

    cy.get(pokemon_log_page.card_trainer).click();
    cy.get(pokemon_log_page.smena_avatara).click();

    function checkAllCards() {
      const totalCards = 12;

      function checkCard(cardNumber) {
        if (cardNumber > totalCards) {
          cy.log("Все карточки проверены!");
          return;
        }

        // Ждем перед проверкой каждой карточки
        cy.wait(1000).then(() => {
          // Проверяем карточку по номеру
          cy.get(`.shop__list > *:nth-child(${cardNumber})`).then(($card) => {
            const classes = $card.attr("class") || "";

            if (classes.includes("available")) {
              cy.log(`Карточка ${cardNumber} ДОСТУПНА - покупаем`);

              // Кликаем на кнопку этой карточки
              cy.wrap($card).find(".shop__button").click();

              // Заполняем реквизиты
              fillCheckoutForm();

              // После заполнения переходим к следующей карточке
              cy.then(() => {
                checkCard(cardNumber + 1);
              });
            } else {
              cy.log(`Карточка ${cardNumber} уже куплена, пропускаем`);
              // Сразу переходим к следующей
              checkCard(cardNumber + 1);
            }
          });
        });
      }

      // Начинаем проверку с первой карточки
      checkCard(1);
    }

    // Запускаем
    checkAllCards();
  });
});

import * as data from "../../login_data/default_data.json"
import * as main_page from "../../locators/main_page.json"
import * as result_page from "../../locators/result_page.json"

describe('Негативная проверка авторизации', function(){
   beforeEach('Начало каждого теста', function() {
    cy.visit('/');
   })
   
   afterEach('Конец каждого теста', function(){
    cy.get(result_page.close).should('be.visible');
    cy.get(result_page.title).contains('Такого логина или пароля нет');
   })

    it ('Правильный логин и неправильный пароль', function() {
        // Генерация случайного пароля
        const wrongPassword = `wrong${Math.floor(Math.random() * 1000)}`;

        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type(wrongPassword);
        cy.get(main_page.login_button).click();
    })

    it ('Неправильный логин и правильный пароль', function(){
        // Генерация случайного email
        const randomEmail = `test${Math.floor(Math.random() * 10000)}@mail.com`;
        
        cy.get(main_page.email).type(randomEmail);
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
    })
})

describe ('Негативная проверка валидации', function(){
    it ('Логин без @ и правильный пароль', function() {
        cy.visit('/');

        cy.get(main_page.email).type('germandolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
    })
})
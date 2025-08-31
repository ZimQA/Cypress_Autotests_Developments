import * as data from "../../login_data/default_data.json"
import * as main_page from "../../locators/main_page.json"
import * as result_page from "../../locators/result_page.json"

describe('Приведение к строчным буквам в логине', function(){
    it ('Ввести логин с заглавными буквами и правильный пароль', function(){
        cy.visit('/');
        
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();

        cy.get(result_page.close).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
    })
})
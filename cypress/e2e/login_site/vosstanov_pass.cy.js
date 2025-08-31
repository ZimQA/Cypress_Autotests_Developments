import * as main_page from "../../locators/main_page.json"
import * as recovery_password_page from "../../locators/recovery_password_page.json" 
import * as result_page from "../../locators/result_page.json"

describe('Восстановление пароля', function() {
    it ('Логика восстановления пароля', function(){
        // Генерация случайного email
        const randomEmail = `test${Math.floor(Math.random() * 10000)}@mail.com`;
        
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).click();

        // Ввод рандомного адреса
        cy.get(recovery_password_page.email).type(randomEmail);
        cy.get(recovery_password_page.send_button).click();

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
        cy.get(result_page.close).should('be.visible');
    })
})
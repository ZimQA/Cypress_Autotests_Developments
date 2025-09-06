# Cypress Automation Framework 🚀

[![Cypress](https://img.shields.io/badge/Cypress-12.7.0-brightgreen)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-success)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Multi-Site](https://img.shields.io/badge/Testing-Multi--Site-orange)](https://github.com/ZimQA/Cypress_Autotests_Developments)

Профессиональный фреймворк для автоматизации end-to-end (E2E) тестирования веб-приложений. Этот проект демонстрирует лучшие практики написания стабильных и поддерживаемых автотестов с использованием современного стека технологий. 🧪

---

## ✨ Ключевые особенности

### 🏗️ **Чистая архитектура с разделением логики**
- Локаторы вынесены в отдельные JSON-файлы для удобства поддержки
- Тестовые данные хранятся в отдельном файле `default_data.json`
- Четкое разделение тестов по функциональности

### ⚙️ **Гибкая мульти-конфигурация**
- **Индивидуальные конфиги** для каждого тестируемого сайта
- **Изолированные настройки** viewport, baseUrl, specPattern
- **Раздельные команды запуска** для каждого проекта

### 🔒 **Безопасное хранение данных**
- Данные авторизации вынесены в отдельный файл `default_data.json`
- Структурированное хранение тестовых данных
- Удобное управление credentials для разных окружений

### 🧩 **Продвинутые техники тестирования**
- **Рекурсивные функции** для сложных сценариев (перебор карточек)
- **Динамическая генерация** тестовых данных для негативного тестирования
- **Модульный подход** к организации тестов

### ✅ **Профессиональные проверки (assertions)**
- Проверка видимости элементов: `.should('be.visible')`
- Проверка текстового содержания: `.contains('Авторизация прошла успешно')`
- Комбинированные проверки: `.should('be.visible').and('contain.text', 'Успешно')`

---

## 🛠️ Технологический стек

| Технология | Назначение |
|------------|------------|
| **Cypress 12.7.0** | Основной фреймворк для E2E тестирования |
| **JavaScript ES6+** | Язык программирования для написания тестов |
| **JSON** | Хранение локаторов и тестовых данных |
| **Node.js 16+** | Среда выполнения JavaScript |
| **npm** | Менеджер пакетов и управление скриптами |

---

## 📁 Структура проекта

Cypress_Autotests_Developments/
├── 📁 cypress/
│   ├── 📁 downloads/                 # Скачанные файлы
│   ├── 📁 e2e/                       # Тестовые спецификации
│   │   ├── 📁 login_site/            # Тесты для формы входа
│   │   │   ├── 📄 negativ_login.cy.js      # Негативные сценарии
│   │   │   ├── 📄 positive_login.cy.js     # Позитивные сценарии  
│   │   │   ├── 📄 priveden_k_stroch_bukv.cy.js # Валидация логина
│   │   │   └── 📄 vosstanov_pass.cy.js     # Восстановление пароля
│   │   └── 📁 pokemons/              # Тесты для Pokemon Battle
│   │       └── 📄 pokypka_avatara.cy.js    # E2E сценарий покупки
│   ├── 📁 fixtures/                   # Статические тестовые данные
│   ├── 📁 locators/                   # Локаторы в JSON-формате
│   │   ├── 📄 main_page.json          # Локаторы главной страницы
│   │   ├── 📄 pokemon_checkForm_page.json # Локаторы формы оплаты
│   │   ├── 📄 pokemon_log_page.json   # Локаторы страницы логина
│   │   ├── 📄 recovery_password_page.json # Локаторы восстановления
│   │   └── 📄 result_page.json        # Локаторы страницы результатов
│   ├── 📁 login_data/                 # Данные для авторизации
│   │   └── 📄 default_data.json       # Основные тестовые данные
│   ├── 📁 screenshots/                # Скриншоты падений тестов
│   ├── 📁 support/                    # Вспомогательные файлы
│   │   ├── 📄 commands.js             # Базовые команды Cypress
│   │   └── 📄 e2e.js                  # Глобальные настройки
│   └── 📁 videos/                     # Видео выполнения тестов
├── 📄 cypress.config.js               # Конфиг для формы входа
├── 📄 cypress.config.site2.js         # Конфиг для Pokemon Battle
├── 📄 package.json                    # Зависимости и скрипты
└── 📄 README.md                       # Документация

---

## 🎯 Поддерживаемые проекты

### 🌐 **Site 1: QA Studio Login** (`cypress.config.js`)
- **URL**: https://login.qa.studio
- **Назначение**: Тестирование системы аутентификации
- **Тесты**: Полный цикл авторизации и восстановления пароля

### 🐲 **Site 2: Pokemon Battle** (`cypress.config.site2.js`) 
- **URL**: https://pokemonbattle.ru
- **Назначение**: Тестирование игровой механики и платежей
- **Тесты**: E2E сценарии покупки аватаров

---

## 📊 Примеры тестовых сценариев

### 🔐 **Тестирование авторизации**
```javascript
// negativ_login.cy.js - Негативное тестирование
describe('Негативная проверка авторизации', function(){
   it('Правильный логин и неправильный пароль', function() {
        const wrongPassword = `wrong${Math.floor(Math.random() * 1000)}`;
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type(wrongPassword);
        cy.get(main_page.login_button).click();
        // Проверка что виден элемент с ошибкой
        cy.get(result_page.close).should('be.visible');
        // Проверка текста ошибки
        cy.get(result_page.title).contains('Такого логина или пароля нет');
   })
})
```

### 🔐 **Сложный E2E сценарий**
```javascript
// pokypka_avatara.cy.js - Рекурсивный перебор карточек
function checkAllCards() {
    const totalCards = 12;

    function checkCard(cardNumber) {
        if (cardNumber > totalCards) return;
        
        cy.wait(1000).then(() => {
            cy.get(`.shop__list > *:nth-child(${cardNumber})`).then(($card) => {
                if ($card.attr("class").includes("available")) {
                    cy.wrap($card).find(".shop__button").click();
                    fillCheckoutForm(); // Заполнение платежной формы
                    checkCard(cardNumber + 1); // Рекурсивный вызов
                } else {
                    checkCard(cardNumber + 1); // Пропуск купленной карточки
                }
            });
        });
    }
    checkCard(1); // Start from card 1
}
```

## 🚀 Запуск тестов

npm run cy:open:site1
npm run cy:run:site2

---

### Happy testing! 🎉 © ZimQA



// Інвестори
const investors = [
  { name: "Інвестор 1", sector: "Інформаційні технології", capital: "500 млн грн" },
  { name: "Інвестор 2", sector: "Фінанси", capital: "1 млрд грн" },
  { name: "Інвестор 3", sector: "Охорона здоров'я", capital: "200 млн грн" }
];

const investorsContainer = document.getElementById("investors-list");

investors.map(investor => {
  const item = document.createElement("div");
  item.classList.add("grid-item");
  item.innerHTML = `
    <div class="investor-header">${investor.name}</div>
    <div class="investor-detail">${investor.sector}</div>
    <div class="investor-detail">${investor.capital}</div>
  `;
  investorsContainer.appendChild(item);
});

// Конкуренти
const competitors = [
  { name: "Компанія A", sector: "Фінанси", rating: "8/10" },
  { name: "Компанія B", sector: "Енергетика", rating: "6/10" },
  { name: "Компанія C", sector: "Технології", rating: "8,9/10" }
];

const competitorsContainer = document.getElementById("competitors-list");

competitors.map(comp => {
  const item = document.createElement("div");
  item.classList.add("grid-item");
  item.innerHTML = `
    <div class="investor-header">${comp.name}</div>
    <div class="investor-detail">${comp.sector}</div>
    <div class="investor-detail">Рейтинг: ${comp.rating}</div>
  `;
  competitorsContainer.appendChild(item);
});







/*document.getElementById("startupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Скасовуємо відправку форми, щоб не було перезавантаження сторінки

  // Збираємо дані з форми
  const companyName = document.getElementById("company-name").value;
  const industry = document.getElementById("industry").value;
  const employees = document.getElementById("employees").value;
  const profits = document.getElementById("profits").value;
  const expenses = document.getElementById("expenses").value;
  const markets = document.getElementById("markets").value;
  const offices = document.getElementById("offices").value;

  // Зберігаємо дані у змінні (можна також зберігати їх в об'єкті чи localStorage для подальшого використання)
  const startupData = {
    companyName,
    industry,
    employees,
    profits,
    expenses,
    markets,
    offices
  };

  // Відображаємо дані в налаштуваннях стартапу
  document.getElementById("company-name-display").textContent = companyName;
  document.getElementById("industry-display").textContent = industry;
  document.getElementById("employees-display").textContent = employees;
  document.getElementById("profits-display").textContent = profits;
  document.getElementById("expenses-display").textContent = expenses;
  document.getElementById("markets-display").textContent = markets;
  document.getElementById("offices-display").textContent = offices;

  // Приховуємо форму і показуємо налаштування
  document.getElementById("startup-form").style.display = "none";
  document.getElementById("startup-settings").style.display = "block";
});




console.log("JavaScript підключено!"); // Перевірка, чи JavaScript підключений

const startupForm = document.getElementById("startupForm");
const startupFormSection = document.getElementById("startup-form");

console.log(startupForm);  // Перевірка, чи елемент startupForm знайдений
console.log(startupFormSection);  // Перевірка, чи елемент startupFormSection знайдений

// Додаємо слухач події на кнопку
const submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", function(event) {
  console.log("Кнопка натиснута!");  // Перевірка на натискання кнопки
  event.preventDefault();  // Скасовуємо стандартну відправку форми
  
  // Сховуємо форму після натискання кнопки "Створити стартап"
  startupFormSection.style.display = "none";
});*/






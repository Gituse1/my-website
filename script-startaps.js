const startupForm = document.getElementById("startupForm");
const startupFormSection = document.getElementById("startup-form");
const toolsContainer = document.getElementById("tools-container");
const savedDataSection = document.getElementById("saved-startup-data");

let startupData = {};

// Зчитування з localStorage при завантаженні сторінки
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("startupData");
  if (saved) {
    startupData = JSON.parse(saved);
    displayStartupData(startupData); // Вивід збережених даних
  }
});

// Обробник форми
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("startupData");
  if (saved) {
    startupData = JSON.parse(saved);
    displayStartupData(startupData); // Вивід збережених даних
    toolsContainer.style.display = "block"; // Показати секцію
  }
});


// Вивід збережених або введених даних
function displayStartupData(data) {
  document.getElementById("company-name-display").textContent = data.companyName;
  document.getElementById("industry-display").textContent = data.industry;
  document.getElementById("expenses-display").textContent = data.expenses;
  document.getElementById("markets-display").textContent = data.markets;
  document.getElementById("offices-display").textContent = data.offices;
  document.getElementById("profit-value").textContent = data.profits;
  document.getElementById("employee-value").textContent = data.employees;
}


// Оновлення значень при натисканні пробілу
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();

    const profitInput = document.getElementById("profit-increase");
    const employeeInput = document.getElementById("employee-increase");

    const profitDelta = parseFloat(profitInput.value) || 0;
    const employeeDelta = parseInt(employeeInput.value) || 0;

    const confirmation = confirm("Ви хочете застосувати ці зміни?");
    if (confirmation) {
      startupData.profits += profitDelta;
      startupData.employees += employeeDelta;

      // Оновлення виводу
      document.getElementById("profit-value").textContent = startupData.profits;
      document.getElementById("employee-value").textContent = startupData.employees;

      // Зберегти оновлені дані
      localStorage.setItem("startupData", JSON.stringify(startupData));

      // Очистити поля
      profitInput.value = "";
      employeeInput.value = "";
    }
  }
});


// Функція для оновлення інтерфейсу
function updateInterface() {
  document.getElementById("company-name-display").textContent = startupData.companyName;
  document.getElementById("industry-display").textContent = startupData.industry;
  document.getElementById("expenses-display").textContent = startupData.expenses;
  document.getElementById("markets-display").textContent = startupData.markets;
  document.getElementById("offices-display").textContent = startupData.offices;
  document.getElementById("profit-value").textContent = startupData.profits;
  document.getElementById("employee-value").textContent = startupData.employees;
}







const form = document.getElementById("startupForm");
const formSection = document.getElementById("startup-form");
const reportSection = document.getElementById("report");
const showReportBtn = document.getElementById("show-report-btn");

let realData = {};
let simulatedData = {};
let chartInstance = null; // для очищення попереднього графіка

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Отримуємо значення з форми
  const profit = parseInt(document.getElementById("profits").value);
  const employees = parseInt(document.getElementById("employees").value);

  // Формуємо масиви для кожного періоду
  realData.profit = Array(5).fill(profit);
  realData.employees = Array(5).fill(employees);

  // Змодельовані значення
  simulatedData.profit = [
    profit,
    profit + 100,
    profit + 200,
    profit + 150,
    profit + 250,
  ];
  simulatedData.employees = [
    employees,
    employees + 2,
    employees + 4,
    employees + 6,
    employees + 8,
  ];

  // Ховаємо форму, показуємо кнопку
  formSection.style.display = "none";
  showReportBtn.style.display = "inline-block";
});

showReportBtn.addEventListener("click", function () {
  // Оновлюємо таблицю
  updateTable();

  // Показуємо звіт
  reportSection.style.display = "block";

  // Побудова графіка
  drawChart(realData, simulatedData);
});

function updateTable() {
  for (let i = 0; i < 5; i++) {
    document.getElementById(`real-profit-${i+1}`).textContent = realData.profit[i];
    document.getElementById(`simulated-profit-${i+1}`).textContent = simulatedData.profit[i];

    document.getElementById(`real-employees-${i+1}`).textContent = realData.employees[i];
    document.getElementById(`simulated-employees-${i+1}`).textContent = simulatedData.employees[i];
  }
}

function drawChart(real, simulated) {
  const ctx = document.getElementById("reportChart").getContext("2d");

  // Якщо графік вже існує — знищуємо його перед створенням нового
  if (chartInstance !== null) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Період 1", "Період 2", "Період 3", "Період 4", "Період 5"],
      datasets: [
        {
          label: "Реальні прибутки",
          data: real.profit,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
        {
          label: "Змодельовані прибутки",
          data: simulated.profit,
          backgroundColor: "rgba(153, 102, 255, 0.6)",
        },
        {
          label: "Реальні працівники",
          data: real.employees,
          backgroundColor: "rgba(255, 159, 64, 0.6)",
        },
        {
          label: "Змодельовані працівники",
          data: simulated.employees,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}




// Функція: Додає стартап у список зліва
function addStartupToList(id, data) {
  const container = document.getElementById("startup-tabs");
  const tab = document.createElement("div");
  tab.style.border = "1px solid #ccc";
  tab.style.padding = "10px";
  tab.style.marginBottom = "5px";
  tab.style.display = "flex";
  tab.style.justifyContent = "space-between";
  tab.style.alignItems = "center";

  const name = document.createElement("span");
  name.textContent = data.companyName;

  const applyBtn = document.createElement("button");
  applyBtn.textContent = "Застосувати";
  applyBtn.onclick = () => {
    startupData = data;
    localStorage.setItem("startupData", JSON.stringify(startupData));
    displayStartupData(data);
    toolsContainer.style.display = "block";
    startupFormSection.style.display = "none";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Видалити";
  deleteBtn.onclick = () => {
    localStorage.removeItem(id);
    tab.remove();
  };

  const actions = document.createElement("div");
  actions.appendChild(applyBtn);
  actions.appendChild(deleteBtn);

  tab.appendChild(name);
  tab.appendChild(actions);

  container.appendChild(tab);
}

// Кнопка під формою — застосовує останній збережений стартап
document.getElementById("apply-saved-btn").addEventListener("click", () => {
  const saved = localStorage.getItem("startupData");
  if (saved) {
    const data = JSON.parse(saved);
    startupData = data;
    displayStartupData(data);
    toolsContainer.style.display = "block";
    startupFormSection.style.display = "none";
  }
});

// Додати стартап у localStorage з унікальним ключем після створення
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const profit = parseFloat(document.getElementById("profits").value);
  const employees = parseInt(document.getElementById("employees").value);

  startupData = {
    companyName: document.getElementById("company-name").value,
    industry: document.getElementById("industry").value,
    employees: employees,
    profits: profit,
    expenses: parseFloat(document.getElementById("expenses").value),
    markets: document.getElementById("markets").value,
    offices: document.getElementById("offices").value,
  };

  const id = "startup_" + Date.now();
  localStorage.setItem(id, JSON.stringify(startupData));
  localStorage.setItem("startupData", JSON.stringify(startupData));

  displayStartupData(startupData);
  toolsContainer.style.display = "block";
  formSection.style.display = "none";

  addStartupToList(id, startupData);
});

// При завантаженні — показати список стартапів і кнопку
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("startupData");
  if (saved) {
    document.getElementById("apply-saved-btn").style.display = "inline-block";
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("startup_")) {
      const data = JSON.parse(localStorage.getItem(key));
      addStartupToList(key, data);
    }
  }
});



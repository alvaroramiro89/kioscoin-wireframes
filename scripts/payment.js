// ===== PAYMENT METHODS FUNCTIONALITY =====

// Payment Methods Data
const paymentMethodsData = {
  ARS: [
    { name: "💰 Mercado Pago", details: "****1234", icon: "💰" },
    { name: "🏦 Banco Santander", details: "****5678", icon: "🏦" },
  ],
  BOB: [
    { name: "📱 YASTA", details: "****9012", icon: "📱" },
    { name: "💳 Billetera Movil BCP", details: "****3456", icon: "💳" },
  ],
  EUR: [
    { name: "🏦 Revolut", details: "****7890", icon: "🏦" },
    { name: "🏦 N26", details: "****2468", icon: "🏦" },
  ],
  USD: [
    { name: "💸 WISE", details: "****1357", icon: "💸" },
    { name: "🏦 Revolut", details: "****2468", icon: "🏦" },
    { name: "💳 Zinli", details: "****9753", icon: "💳" },
  ],
};

const paymentMethodsList = document.getElementById("paymentMethodsList");

// Update Payment Methods
function updatePaymentMethods(currency) {
  const methods = paymentMethodsData[currency] || [];
  const maxVisible = 2;

  // Clear current methods
  paymentMethodsList.innerHTML = "";

  // Show up to 2 methods
  const visibleMethods = methods.slice(0, maxVisible);
  visibleMethods.forEach((method) => {
    const methodElement = document.createElement("div");
    methodElement.className = "payment-method";
    methodElement.innerHTML = `
      <span>${method.name}</span>
      <span>✅</span>
    `;
    paymentMethodsList.appendChild(methodElement);
  });

  // Show "Ver más" button if there are 3 or more methods
  if (methods.length >= 3) {
    viewMoreContainer.style.display = "block";
  } else {
    viewMoreContainer.style.display = "none";
  }
}

// Open Add Payment Modal
function openAddPaymentModal(currency) {
  const fieldLabels = {
    ARS: { field: "CVU", placeholder: "Ej: 0000003100010000000001" },
    BOB: { field: "CVU", placeholder: "Ej: 0000003100010000000001" },
    EUR: {
      field: "IBAN",
      placeholder: "Ej: ES91 2100 0418 4502 0005 1332",
    },
    USD: { field: "SWIFT", placeholder: "Ej: CHASUS33XXX" },
  };

  const config = fieldLabels[currency];
  addPaymentTitle.textContent = `Agregar método de pago (${currency})`;
  methodCodeLabel.textContent = config.field;
  methodCodeInput.placeholder = config.placeholder;

  methodNameInput.value = "";
  methodCodeInput.value = "";
  addMethodMessage.textContent = "";
  addMethodMessage.className = "transfer-message";

  addPaymentModal.classList.add("show");
}

// Connect existing + button to add payment functionality
const addPaymentContainer = document.querySelector(".add-payment-container");
addPaymentContainer.addEventListener("click", () => {
  const currentCurrency = getCurrentCurrency();
  openAddPaymentModal(currentCurrency);
});

// ===== BUY/SELL SWITCH FUNCTIONALITY =====

const buySellSwitch = document.getElementById("buySellSwitch");
const amountElement = document.querySelector(".amount");

// Store original amounts for each currency
const originalAmounts = {
  ARS: 1230,
  BOB: 6.9,
  EUR: 0.86,
  USD: 0.99,
};

function updatePriceDisplay() {
  const currentCurrency = getCurrentCurrency();
  const isSellingMode = buySellSwitch.checked;
  const originalAmount = originalAmounts[currentCurrency];

  let displayAmount;
  let prefix = "";

  if (isSellingMode) {
    // Apply 3% discount for selling
    displayAmount = (originalAmount * 0.97).toFixed(2);
  } else {
    displayAmount = originalAmount.toFixed(2);
  }

  // Add currency prefix
  switch (currentCurrency) {
    case "ARS":
    case "USD":
      prefix = "$";
      break;
    case "EUR":
      prefix = "€";
      break;
    case "BOB":
      prefix = "";
      break;
  }

  amountElement.textContent = `USDC for ${prefix}${displayAmount}, ${currentCurrency}`;
}

// Listen for switch changes
buySellSwitch.addEventListener("change", updatePriceDisplay);

// Helper function to get current currency
function getCurrentCurrency() {
  const currencyBtn = document.getElementById("currencyBtn");
  const flagToCurrency = {
    "🇦🇷": "ARS",
    "🇧🇴": "BOB",
    "🇪🇺": "EUR",
    "🇺🇸": "USD",
  };
  return flagToCurrency[currencyBtn.textContent] || "EUR";
}

// Initialize with default currency
updatePaymentMethods("ARS");

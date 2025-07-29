// ===== DROPDOWN FUNCTIONALITY =====

// Crypto Dropdown
const cryptoDropdown = document.getElementById("cryptoDropdown");
const cryptoDropdownMenu = document.getElementById("cryptoDropdownMenu");
const cryptoOptions = document.querySelectorAll(".crypto-option");

cryptoDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  cryptoDropdownMenu.classList.toggle("show");
  networkDropdownMenu.classList.remove("show");
});

cryptoOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    const crypto = option.dataset.crypto;
    const logoElement = option
      .querySelector(".crypto-logo-small")
      .cloneNode(true);

    // Update main logo
    cryptoDropdown.innerHTML = logoElement.innerHTML;
    cryptoDropdown.className = `usdc-logo crypto-dropdown ${logoElement.className}`;

    // Update balance display
    const balanceAmount = document.querySelector(".balance-amount");
    if (crypto === "USDC") {
      balanceAmount.textContent = "$ 102.89";
    } else {
      balanceAmount.textContent = "₭ 873.75";
    }

    cryptoDropdownMenu.classList.remove("show");
  });
});

// Network Dropdown
const networkDropdown = document.getElementById("networkDropdown");
const networkDropdownMenu = document.getElementById("networkDropdownMenu");
const networkOptions = document.querySelectorAll(".network-option");

// Debug: Check if logos load properly
const allLogos = document.querySelectorAll(
  ".network-logo, .network-option-logo"
);
allLogos.forEach((logo) => {
  logo.onload = () => console.log(`✅ Logo loaded: ${logo.src}`);
  logo.onerror = () => console.log(`❌ Logo failed: ${logo.src}`);
});

networkDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  networkDropdownMenu.classList.toggle("show");
  cryptoDropdownMenu.classList.remove("show");
});

networkOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    const network = option.dataset.network;
    const logoSrc = option.dataset.logo;

    // Update the selected network logo and text
    const selectedLogo = document.getElementById("selectedNetworkLogo");
    const networkText = networkDropdown.querySelector(".network-text");

    selectedLogo.src = logoSrc;
    selectedLogo.alt = network;
    networkText.textContent = network;

    networkDropdownMenu.classList.remove("show");
  });
});

// Currency Dropdown
const currencyBtn = document.getElementById("currencyBtn");
const currencyDropdownMenu = document.getElementById("currencyDropdownMenu");
const currencyOptions = document.querySelectorAll(".currency-option");

currencyBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currencyDropdownMenu.classList.toggle("show");
  cryptoDropdownMenu.classList.remove("show");
  networkDropdownMenu.classList.remove("show");
});

currencyOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    const flag = option.dataset.flag;
    const currency = option.dataset.currency;
    const amount = option.dataset.amount;

    // Update button with selected flag
    currencyBtn.textContent = flag;

    // Update Fast Action amount using the new price display function
    updatePriceDisplay();

    // Update payment methods based on currency
    updatePaymentMethods(currency);

    // Close dropdown
    currencyDropdownMenu.classList.remove("show");

    console.log(`Selected currency: ${currency} ${flag} - Amount: ${amount}`);
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  cryptoDropdownMenu.classList.remove("show");
  networkDropdownMenu.classList.remove("show");
  currencyDropdownMenu.classList.remove("show");
});

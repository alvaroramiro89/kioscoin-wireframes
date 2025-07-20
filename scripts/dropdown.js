// Dropdown functionality for crypto selector
document.addEventListener("DOMContentLoaded", function () {
  const cryptoSelector = document.getElementById("cryptoSelector");
  const networkDropdown = document.getElementById("networkDropdown");
  const networkDisplay = document.getElementById("networkDisplay");
  const networkOptions = document.querySelectorAll(".network-option");

  // Toggle dropdown
  cryptoSelector.addEventListener("click", function (e) {
    e.preventDefault();
    networkDropdown.classList.toggle("show");
    cryptoSelector.classList.toggle("active");
  });

  // Handle network selection
  networkOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.preventDefault();
      const network = this.dataset.network;
      const networkName = this.querySelector(".network-chain").textContent;

      // Update display
      networkDisplay.textContent = networkName;

      // Close dropdown
      networkDropdown.classList.remove("show");
      cryptoSelector.classList.remove("active");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !cryptoSelector.contains(e.target) &&
      !networkDropdown.contains(e.target)
    ) {
      networkDropdown.classList.remove("show");
      cryptoSelector.classList.remove("active");
    }
  });
});

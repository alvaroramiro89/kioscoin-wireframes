// ===== MODAL FUNCTIONALITY =====

// Transfer Modal Elements
const transferContainer = document.querySelector(".transfer-container");
const transferModal = document.getElementById("transferModal");
const closeTransferModal = document.getElementById("closeTransferModal");
const transferBtn = document.getElementById("transferBtn");
const walletAddressInput = document.getElementById("walletAddress");
const transferMessage = document.getElementById("transferMessage");
const transferModalTitle = document.getElementById("transferModalTitle");

// Deposit Modal Elements
const depositContainer = document.querySelector(".deposit-container");
const depositModal = document.getElementById("depositModal");
const closeDepositModal = document.getElementById("closeDepositModal");
const copyAddressBtn = document.getElementById("copyAddressBtn");
const depositWalletAddress = document.getElementById("depositWalletAddress");
const depositMessage = document.getElementById("depositMessage");
const depositModalTitle = document.getElementById("depositModalTitle");

// View All Payment Methods Modal Elements
const viewMoreBtn = document.getElementById("viewMoreBtn");
const viewMoreContainer = document.getElementById("viewMoreContainer");
const viewAllMethodsModal = document.getElementById("viewAllMethodsModal");
const closeViewAllModal = document.getElementById("closeViewAllModal");
const allPaymentMethodsList = document.getElementById("allPaymentMethodsList");

// Add Payment Method Modal Elements
const addPaymentModal = document.getElementById("addPaymentModal");
const closeAddPaymentModal = document.getElementById("closeAddPaymentModal");
const addPaymentTitle = document.getElementById("addPaymentTitle");
const methodNameInput = document.getElementById("methodName");
const methodCodeInput = document.getElementById("methodCode");
const methodCodeLabel = document.getElementById("methodCodeLabel");
const addMethodBtn = document.getElementById("addMethodBtn");
const addMethodMessage = document.getElementById("addMethodMessage");

// Open transfer modal
transferContainer.addEventListener("click", () => {
  // Update modal title based on selected network
  const selectedNetwork = document.querySelector(".network-text").textContent;
  if (selectedNetwork === "BNB") {
    transferModalTitle.textContent = "Transferir USDC (BEP-20)";
  } else if (selectedNetwork === "ARB") {
    transferModalTitle.textContent = "Transferir USDC (ERC-20)";
  }

  transferModal.classList.add("show");
  transferMessage.textContent = "";
  transferMessage.className = "transfer-message";
  walletAddressInput.value = "";
});

// Close transfer modal
closeTransferModal.addEventListener("click", () => {
  transferModal.classList.remove("show");
});

// Close modal when clicking outside
transferModal.addEventListener("click", (e) => {
  if (e.target === transferModal) {
    transferModal.classList.remove("show");
  }
});

// Transfer button logic
transferBtn.addEventListener("click", () => {
  const walletAddress = walletAddressInput.value.trim();

  if (!walletAddress) {
    transferMessage.textContent = "Pegar dirección válida";
    transferMessage.className = "transfer-message error";
  } else {
    transferMessage.textContent = "Transferencia realizada con éxito";
    transferMessage.className = "transfer-message success";

    // Close modal after 2 seconds
    setTimeout(() => {
      transferModal.classList.remove("show");
    }, 2000);
  }
});

// Open deposit modal
depositContainer.addEventListener("click", () => {
  // Update modal title based on selected network
  const selectedNetwork = document.querySelector(".network-text").textContent;
  if (selectedNetwork === "BNB") {
    depositModalTitle.textContent = "Deposit USDC (BEP-20)";
  } else if (selectedNetwork === "ARB") {
    depositModalTitle.textContent = "Deposit USDK (ERC-20)";
  }

  depositModal.classList.add("show");
  depositMessage.textContent = "";
  depositMessage.className = "transfer-message";
  copyAddressBtn.textContent = "Copy";
  copyAddressBtn.classList.remove("copied");
});

// Close deposit modal
closeDepositModal.addEventListener("click", () => {
  depositModal.classList.remove("show");
});

// Close deposit modal when clicking outside
depositModal.addEventListener("click", (e) => {
  if (e.target === depositModal) {
    depositModal.classList.remove("show");
  }
});

// Copy address functionality
copyAddressBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(depositWalletAddress.value);
    copyAddressBtn.textContent = "Copied";
    copyAddressBtn.classList.add("copied");

    depositMessage.innerHTML = `
      <span>Dirección copiada al portapapeles</span>
      <button class="close-message-btn success-btn" onclick="this.parentElement.textContent=''; this.parentElement.className='transfer-message';">✅</button>
    `;
    depositMessage.className = "transfer-message success";

    // Reset copy button after 3 seconds
    setTimeout(() => {
      copyAddressBtn.textContent = "Copy";
      copyAddressBtn.classList.remove("copied");
    }, 3000);
  } catch (err) {
    depositMessage.textContent = "Error al copiar la dirección";
    depositMessage.className = "transfer-message error";
  }
});

// View More Methods Modal
viewMoreBtn.addEventListener("click", () => {
  const currentCurrency = getCurrentCurrency();
  const methods = paymentMethodsData[currentCurrency] || [];

  // Update modal title
  const allMethodsTitle = document.getElementById("allMethodsTitle");
  allMethodsTitle.textContent = `Métodos de pago (${currentCurrency})`;

  allPaymentMethodsList.innerHTML = "";
  methods.forEach((method) => {
    const methodElement = document.createElement("div");
    methodElement.className = "payment-method";
    methodElement.innerHTML = `
      <div class="method-info">
        <div class="method-name-full">${method.name}</div>
        <div class="method-details-full">${method.details}</div>
      </div>
      <span>✅</span>
    `;
    allPaymentMethodsList.appendChild(methodElement);
  });

  viewAllMethodsModal.classList.add("show");
});

// Close View All Modal
closeViewAllModal.addEventListener("click", () => {
  viewAllMethodsModal.classList.remove("show");
});

// Close Add Payment Modal
closeAddPaymentModal.addEventListener("click", () => {
  addPaymentModal.classList.remove("show");
});

// Add Payment Method
addMethodBtn.addEventListener("click", () => {
  const name = methodNameInput.value.trim();
  const code = methodCodeInput.value.trim();

  if (!name || !code) {
    addMethodMessage.textContent = "Por favor completa todos los campos";
    addMethodMessage.className = "transfer-message error";
    return;
  }

  addMethodMessage.textContent = "Método agregado exitosamente";
  addMethodMessage.className = "transfer-message success";

  setTimeout(() => {
    addPaymentModal.classList.remove("show");
    // Here you would normally add the method to the data and refresh the list
  }, 1500);
});

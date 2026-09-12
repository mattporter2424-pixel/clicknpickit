// ---- Config -----------------------------------------------------------
// Replace with the real inbox that should receive order requests.
const ORDER_EMAIL = "orders@clicknpickit.example";

// ---- Mobile nav toggle --------------------------------------------------
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---- Toast helper ---------------------------------------------------------
const toastEl = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

// ---- "Add to Order" buttons prefill the items textarea -------------------
const itemsField = document.getElementById("items");

document.querySelectorAll(".add-to-order").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product || "Item";
    if (itemsField) {
      const line = `1x ${product}`;
      itemsField.value = itemsField.value
        ? `${itemsField.value}\n${line}`
        : line;
    }
    showToast(`${product} added to your order form ↓`);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ---- Order form -> pre-filled email (no backend required) ---------------
const orderForm = document.getElementById("order-form");

if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const items = document.getElementById("items").value.trim();
    const notes = document.getElementById("notes").value.trim();

    const subject = `New order request from ${name || "a customer"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Items wanted:",
      items || "(none listed)",
      "",
      "Color / custom notes:",
      notes || "(none)",
    ];

    const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    showToast("Opening your email app…");
  });
}

// ---- Footer year -----------------------------------------------------------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------------- Dropdown (Languages) ----------------

// Get all dropdown elements with class "lang"
const allLangs = document.querySelectorAll(".lang");

allLangs.forEach((lang) => {
  const btn = lang.querySelector("button"); // dropdown button
  const ul = lang.querySelector("ul"); // dropdown list
  const icon = lang.querySelector("button i"); // icon inside button

  // Toggle dropdown on button click
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing when clicking inside

    ul.classList.toggle("active"); // open/close dropdown list
    icon.classList.toggle("active"); // toggle icon state
  });
});

// Close any open dropdown when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".lang ul.active").forEach((openUl) => {
    openUl.classList.remove("active");
  });

  document.querySelectorAll(".lang button i.active").forEach((activeIcon) => {
    activeIcon.classList.remove("active");
  });
});

// Toggle browse categories menu
const CategoriesBtn = document.getElementById("Categories");
const CategorieMenue = document.querySelector(
  ".lastNav .browseAllCategories .categorieContainer"
);

CategoriesBtn.addEventListener("click", () => {
  CategorieMenue.classList.toggle("show");
});

// ------------------------------------------------------
const cartTable = document.getElementById("cart-table");
const clearCartBtn = document.getElementById("clear-cart");

// Update subtotal for each row
function updateSubtotal(row) {
  const qtyInput = row.querySelector("input");
  const priceText = row
    .querySelector(".product-info span.fw-bold")
    .textContent.replace(/[^\d.]/g, "");
  const price = parseFloat(priceText);
  const qty = parseInt(qtyInput.value) || 1;
  const subtotalCell = row.querySelector(".subtotal");

  subtotalCell.textContent = "Rs." + (price * qty).toFixed(2);
}

// Handle +, -, and remove buttons
cartTable.addEventListener("click", function (e) {
  if (e.target.closest("button")) {
    const btn = e.target.closest("button");
    const row = btn.closest("tr.cart-row");
    const qtyInput = row.querySelector("input");

    // Plus button
    if (btn.textContent.trim() === "+") {
      qtyInput.value = parseInt(qtyInput.value) + 1;
      updateSubtotal(row);
    }

    // Minus button
    if (btn.textContent.trim() === "-") {
      if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        updateSubtotal(row);
      }
    }

    // Remove button
    if (btn.classList.contains("btn-danger")) {
      row.remove();
    }
  }
});

// Update subtotal when typing quantity manually
cartTable.addEventListener("input", function (e) {
  if (e.target.tagName === "INPUT") {
    const row = e.target.closest("tr.cart-row");
    updateSubtotal(row);
  }
});

// Clear all rows when clicking "Clear Cart"
clearCartBtn.addEventListener("click", function () {
  cartTable.querySelector("tbody").innerHTML = "";
});

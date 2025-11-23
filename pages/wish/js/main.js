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

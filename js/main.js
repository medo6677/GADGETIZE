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

// ---------------- Toggle Filter ----------------

// Toggle list show/hide on button click
document.getElementById("toggleButton").addEventListener("click", function () {
  const list = document.getElementById("myList");
  const button = document.getElementById("toggleButton");

  if (list.classList.contains("hidden")) {
    // List is hidden → show it
    list.classList.remove("hidden");
    button.textContent = "Hide Filter"; // update button text
  } else {
    // List is visible → hide it
    list.classList.add("hidden");
    button.textContent = "Show Filter"; // reset button text
  }
});

// ---------------- Countdown Timer ----------------

// Target end date for countdown
const endDate = new Date("Dec 31, 2025 23:59:59").getTime();

// Function to update countdown every second
function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  // If time expired
  if (distance < 0) {
    document.querySelector(".Countdown").innerHTML = "<h4>Time's up!</h4>";
    return;
  }

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update HTML elements with values
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0"
  );
}

// Update countdown every 1 second
setInterval(updateCountdown, 1000);
updateCountdown(); // run once immediately

// ---------------- Footer Toggle ----------------

// Show/hide footer menu on button click

const FooterBtn = document.querySelector(
  ".center-links .linksContainer .link button "
);
const FooterUL = document.querySelector(
  ".center-links .linksContainer .link ul"
);

FooterBtn.addEventListener("click", () => {
  FooterUL.classList.toggle("show");
});
// Toggle browse categories menu
const CategoriesBtn = document.getElementById("Categories");
const CategorieMenue = document.querySelector(
  ".lastNav .browseAllCategories .categorieContainer"
);

CategoriesBtn.addEventListener("click", () => {
  CategorieMenue.classList.toggle("show");
});

// ------------------------------------------------ AOS LIB------------------------
AOS.init();
// ------------------------------------------------ END AOS LIB------------------------
$(document).ready(function () {
  $(".categories-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 3 },
      576: { items: 4 },
      768: { items: 5 },
      992: { items: 7 },
      1200: { items: 9 },
    },
  });
});

$(document).ready(function () {
  $(".partners-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
      1200: { items: 6 },
    },
  });
});

window.addEventListener("scroll", function () {
  const zomatologo = document.getElementById("zomatologo");

  const navDiv = document.querySelector(".header-registration > nav > div");
  if (window.scrollY > 65) {
    // Change 50 to whatever scroll position you prefer
    navDiv.classList.add("scrolled");
    zomatologo.src =
      "https://b.zmtcdn.com/data/o2_assets/f7e17618f914e229ba638dd7b18ed3be1715148110.png";
  } else {
    navDiv.classList.remove("scrolled");
    zomatologo.src =
      "https://b.zmtcdn.com/data/o2_assets/3ecd43d729cc8135698465d4c964340b1710920889.png";
  }
});

// script for the accordion section

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active"); // For styling the active state
    const panel = this.nextElementSibling;

    // Modern approach with transition support
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.getElementById("closeBtn");
const loginModal = document.getElementById("loginModal");

// Open modal
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  loginModal.classList.add("active"); // Add .active class (which uses display: flex)
});

// Close modal (X button)
closeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  loginModal.classList.remove("active");
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target === loginModal) {
    loginModal.classList.remove("active");
  }
});


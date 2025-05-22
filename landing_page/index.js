function GoToRestuarantPage() {
  const addToRestuarantPage = document.getElementById("AddToResturantPage");
  addToRestuarantPage.addEventListener("click", function () {
    setTimeout(() => {
      window.location.href = "../restaurants_page/resturant.html";
    }, 1000);
  });
}
GoToRestuarantPage();
// login modal js

function LoginModal() {
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
}
// LoginModal()

setTimeout(() => {
  LoginModal();
}, 2000);
// login modal js

function SingupModal() {
  const signupBtn = document.getElementById("signupBtn");
  const signupcloseBtn = document.getElementById("signupcloseBtn");
  const signupModal = document.getElementById("signupModal");

  // Open modal
  signupBtn.addEventListener("click", function (event) {
    event.preventDefault();
    signupModal.classList.add("active"); // Add .active class (which uses display: flex)
  });

  // Close modal (X button)
  signupcloseBtn.addEventListener("click", function (event) {
    event.preventDefault();
    signupModal.classList.remove("active");
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target === signupModal) {
      signupModal.classList.remove("active");
    }
  });
}
setTimeout(() => {
  SingupModal();
}, 2000);


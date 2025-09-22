// =====================
// Part 1: Event Handling
// =====================

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ==== Cyber Service Counter Game ====
let customerCount = parseInt(localStorage.getItem("customerCount")) || 0;
const serveBtn = document.getElementById("serveBtn");
const customerCountDisplay = document.getElementById("customerCount");
const counterMessage = document.getElementById("counterMessage");

function updateCounterUI() {
  customerCountDisplay.textContent = customerCount;

  if (customerCount === 0) {
    counterMessage.textContent = "No customers served yet.";
  } else if (customerCount === 1) {
    counterMessage.textContent = "You just served your first customer! 🚀";
  } else if (customerCount < 5) {
    counterMessage.textContent = `Great! You’ve served ${customerCount} customers. Keep going!`;
  } else if (customerCount < 10) {
    counterMessage.textContent = `🔥 Business is booming! ${customerCount} happy customers served.`;
  } else {
    counterMessage.textContent = `🏆 Amazing! ${customerCount} customers served at Giltech Online Cyber.`;
  }
}

updateCounterUI();

serveBtn.addEventListener("click", () => {
  customerCount++;
  localStorage.setItem("customerCount", customerCount);
  updateCounterUI();
});

// ==== FAQ Toggle with Animation ====
const faqItems = document.querySelectorAll(".faq-item h4");

faqItems.forEach(question => {
  question.style.cursor = "pointer";
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");

    if (answer.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.textContent = "− " + question.textContent.replace(/^(\+ |− )/, "");
    } else {
      answer.style.maxHeight = null;
      question.textContent = "+ " + question.textContent.replace(/^(\+ |− )/, "");
    }
  });
});

// ==== Signup Form Validation ====
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const formSuccess = document.getElementById("formSuccess");

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  formSuccess.textContent = "";

  if (name === "") {
    nameError.textContent = "Full name is required.";
    isValid = false;
  }

  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = "🎉 Account created successfully!";
    formSuccess.style.color = "green";
    document.getElementById("signupForm").reset();
  }
});

// ==== Contact Form Validation ====
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;

  const name = document.getElementById("contactName");
  const nameError = document.getElementById("contactNameError");
  const email = document.getElementById("contactEmail");
  const emailError = document.getElementById("contactEmailError");
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("contactFormSuccess");

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
    } else {
      messageError.textContent = "";
    }
  
    if (valid) {
      formSuccess.textContent = "✅ Message sent successfully!";
      formSuccess.style.color = "green";
      contactForm.reset();
    }
  });

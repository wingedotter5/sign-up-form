const form = document.getElementById("the-only-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  if (password.value !== confirmPassword.value) {
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    document.getElementById("password-match").classList.add("error");
  } else {
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    document.getElementById("password-match").classList.remove("error");
  }
});
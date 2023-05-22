/* skjul/vis kodeord funktion */
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");
  var toggleButtons = document.querySelectorAll(".toggle-password");

  toggleButtons.forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
      } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
      }

      toggleButton.classList.toggle("active");
    });
  });
}

/* husk mig knap funktion */
function toggleButton(button) {
  button.classList.toggle("on");
}

// Kald funktionen togglePasswordVisibility() når DOM'en er indlæst
document.addEventListener("DOMContentLoaded", togglePasswordVisibility);

/* skjul/vis kodeord funktion */
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleButton = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.classList.add("active");
  } else {
    passwordInput.type = "password";
    toggleButton.classList.remove("active");
  }
}

const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  togglePasswordVisibility();
});


  /* husk mig knap funktion */
  function toggleButton(button) {
    button.classList.toggle("on");
  }


  document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".loginknap").addEventListener("click", validateForm);
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      validateForm();
    }
  });

  function validateForm() {
    const user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    const errorText = document.getElementById("errorText");

    if (user.email === "" || user.password === "") {
      errorText.textContent = "Udfyld venligst begge felter";
      return false;
    } else {
      // Tjek om email og password matcher det ønskede login
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

      const validLogins = [
        { email: "stle48708@edu.ucl.dk", password: "Ucl123" },
        { email: "edzu50541@edu.ucl.dk", password: "Ucl123" },
        { email: "nrjo50210@edu.ucl.dk", password: "Ucl123" },
        { email: "rabe50477@edu.ucl.dk", password: "Ucl123" }
      ];

      let validEmail = false;
      let validPassword = false;

      for (let i = 0; i < validLogins.length; i++) {
        if (user.email === validLogins[i].email) {
          validEmail = true;
          if (user.password === validLogins[i].password) {
            validPassword = true;
            break;
          }
        }
      }

      if (validEmail && validPassword) {
        // Validering er succesfuld
        window.location.href = "forside.html"; // Omdirigér til forsiden
        return true;
      } else {
        // Forkert loginoplysninger
        if (!validEmail && !validPassword) {
          errorText.textContent = "Forkert e-mail og adgangskode. Prøv igen.";
        } else if (!validEmail) {
          errorText.textContent = "Forkert e-mail. Prøv igen.";
        } else {
          errorText.textContent = "Forkert adgangskode. Prøv igen.";
        }
        return false;
      }
    }
  }
});

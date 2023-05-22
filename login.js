/* skjul/vis kodeord funktion */
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");

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


  // Input valideringsform og login
  function validateForm() {
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    if (emailInput === "" || passwordInput === "") {
      alert("Udfyld venligst begge felter");
      return false;
    } else {
      // Tjek om email og password matcher det ønskede login
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

      if (emailInput === "stle48708@edu.ucl.dk" && passwordInput === "Ucl123") {
        // Validering er succesfuld
        
        window.location.href = "forside.html"; // Omdirigér til forsiden
        return true;
      } else {
        // Forkert loginoplysninger
        alert("Forkert email eller adgangskode. Prøv igen.");
        return false;
      }
    }
  }

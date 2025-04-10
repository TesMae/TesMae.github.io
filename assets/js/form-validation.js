function formValidation() {
  document.getElementById("form").addEventListener("submit", function (event) {
    var valid = true;

    // Clear previous error messages
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (message) {
      message.textContent = "";
    });

    // Validate text input fields
    var name = document.querySelector('input[name="name"]');
    var email = document.querySelector('input[name="email"]');
    var tel = document.querySelector('input[name="tel"]');
    var companyName = document.querySelector('input[name="subject"]');
    var message = document.querySelector('textarea[name="message"]');

    if (!name.value.trim()) {
      document.getElementById("name-error").textContent = "Le nom est requis";
      valid = false;
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
      document.getElementById("email-error").textContent =
        "Un email valide est requis";
      valid = false;
    }

    if (!tel.value.trim() || !validatePhoneNumber(tel.value)) {
      document.getElementById("tel-error").textContent =
        "Un numéro de téléphone valide est requis";
      valid = false;
    }

    if (!companyName.value.trim()) {
      document.getElementById("subject-error").textContent =
        "Le nom de l'entreprise est requis";
      valid = false;
    }

    if (!message.value.trim()) {
      document.getElementById("message-error").textContent =
        "Le message est requis";
      valid = false;
    }

    // Validate reCAPTCHA
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
      document.getElementById("recaptcha-error").textContent =
        "Veuillez compléter le reCAPTCHA.";
      valid = false;
    }

    // If any validation fails, prevent the form submission
    if (!valid) {
      event.preventDefault();
    } else {
      document.getElementById("success-message").textContent =
        "Votre formulaire a été soumis avec succès. Nous reviendrons vers vous très rapidement. ";
      document.getElementById("success-message").style.display = "block";
      grecaptcha.reset();
    }
  });
}
formValidation();

// Email validation function
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Phone number validation function
function validatePhoneNumber(phone) {
  var re = /^\+?[0-9]{8}$/;
  return re.test(String(phone).replace(/\s/g, ""));
}

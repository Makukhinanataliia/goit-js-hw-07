document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");
  const submitButton = form.querySelector('button[type="submit"]');

  function handleSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
      alert("All form fields must be filled in");
    } else {
      const formData = {
        email: email.trim(),
        password: password.trim(),
      };
      console.log(formData);
      form.reset();
    }
  }

  form.addEventListener("submit", handleSubmit);

  // Changing the button text
  submitButton.textContent = "Log in";
});

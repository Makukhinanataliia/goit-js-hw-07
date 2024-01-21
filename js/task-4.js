document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");
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
});
// Отримуємо посилання на елемент кнопки за типом
const submitButton = document.querySelector('button[type="submit"]');

// Змінюємо текст кнопки
submitButton.textContent = "Log in";

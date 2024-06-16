const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', onRegisterFormSubmit);

function onRegisterFormSubmit(event) {
  event.preventDefault();

  const data = {
    email: registerForm.elements.email.value.trim(),
    password: registerForm.elements.password.value.trim(),
  };

  if (!data.email || !data.password) {
    alert('All form fields must be filled in');
  }

  console.log(data);
  registerForm.reset();
}

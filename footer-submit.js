//form submit
const submitForm = document.querySelector('.form-submit');
const notyf = new Notyf();

submitForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email },
  } = event.currentTarget;

  const userEmail = {
    email: email.value,
  };
  console.log(userEmail);

  event.currentTarget.reset();
  notyf.success('Ваші дані відправлено!');
}

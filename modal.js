//toggle modal
const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.classList.toggle('scroll-hidden');

  window.addEventListener('keydown', onKeyClick);
  window.addEventListener('click', onCloseModalbyBackdrop);
}

function onKeyClick(event) {
  if (refs.modal.classList.contains('is-hidden')) {
    return;
  }
  if (event.code !== 'Escape') {
    return;
  }

  modalSettings();
}

function onCloseModalbyBackdrop(event) {
  if (refs.modal.classList.contains('is-hidden')) {
    return;
  }
  if (event.target === refs.modal) {
    modalSettings();
  }
}

function modalSettings() {
  toggleModal();
  clearBackdropListeners();
}

function clearBackdropListeners() {
  window.removeEventListener('keydown', onKeyClick);
  window.removeEventListener('click', onCloseModalbyBackdrop);
}

//form submit
const requestForm = document.querySelector('.modal-form');
const notyf = new Notyf();

requestForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, phone, email, message, terms },
  } = event.currentTarget;

  if (email.value === '' || name.value === '' || phone.value === '') {
    return notyf.error('Будь ласка заповніть усі поля');
  }

  const clientRequest = {
    name: name.value,
    phone: phone.value,
    email: email.value,
    message: message.value,
    terms: terms.value,
  };
  console.log(clientRequest);

  event.currentTarget.reset();
  notyf.success('Ваші дані відправлено!');
  toggleModal();
}

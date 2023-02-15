import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const texttaria = document.querySelector('textarea');
const input = document.querySelector('input');
const FEEDBACK = 'feedback-form-state';
const dataFeetback = {};

form.addEventListener('input', throttle(handleInputText, 500));
form.addEventListener('submit', handleSubmitForm);
getValueLokalStor();

function handleInputText({ target }) {
  dataFeetback.email = input.value;
  dataFeetback.message = texttaria.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(dataFeetback));
}
function handleSubmitForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(FEEDBACK);
}

function getValueLokalStor() {
  const savedFeedback = localStorage.getItem(FEEDBACK);
  const parsedFedback = JSON.parse(savedFeedback);
  if (savedFeedback) {
    texttaria.value = parsedFedback.message;
    input.value = parsedFedback.email;
  }
}

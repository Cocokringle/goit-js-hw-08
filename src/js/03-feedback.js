import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`)
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

let formData = {};
const userData = {
  email: emailInput,
  message: messageInput,
};


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));
populateTextArea()


function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextArea() {
    if (localStorage.getItem(STORAGE_KEY)) {
    const parsedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsedFormData.email) {
      userData.email.value = parsedFormData.email;
      formData.email = userData.email.value;
    }
    if (parsedFormData.message) {
      userData.message.value = parsedFormData.message;
      formData.message = userData.message.value;
    }
  }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData)
   
}
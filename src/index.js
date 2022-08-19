import { request } from './api.js';
import { renderContact } from './render.js';
import { checkInput } from './input.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contacts = await request();
  const form = document.querySelector('form');

  Object.values(contacts).forEach(renderContact)
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const isValid = [...form.elements].filter((input) => input.tagName === 'INPUT')
      .every((input) => checkInput(input));
    if(isValid) {
      const body = new FormData(form);
      const addContact = await request('POST', body);
      renderContact(addContact);
      form.reset();
    }
  });
});
export const checkInput = (input) => {
  const { min, max } = input.dataset;

  const createSpan = (text) => {
    if (input.nextElementSibling === null) {
      const span = document.createElement('span');
      span.classList.add('input__message');
      span.innerText = text;
      input.after(span);
    }
    if (input.nextElementSibling.innerText !== text) {
      input.nextElementSibling.innerText = text;
    }
    return false;
  };

  if (!input.value) {
    return createSpan('This field is required');
  }

  if (input.value.length < min) {
    return createSpan(
      `${input.name} should NOT be shorter than ${min} characters`
    );
  }

  if (input.value.length > max) {
    return createSpan(
      `${input.name} should NOT be longer than ${max} characters`
    );
  }

  if (input.nextElementSibling !== null) {
    input.nextElementSibling.remove();
  }

  return true;
};

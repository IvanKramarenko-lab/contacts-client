export const checkInput = (input) => {
  const { min, max } = input.dataset;

  if (!input.value) {
    input.nextElementSibling.innerText = `This field is required`;
    return false;
  }

  if(input.value.length < min) {
    input.nextElementSibling.innerText = `${input.name} should NOT be shorter than ${min} characters`;
    return false;
  }

  if(input.value.length > max) {
    input.nextElementSibling.innerText = `${input.name} should NOT be longer than ${max} characters`;
    return false;
  }
  input.nextElementSibling.innerText = ""

  return true
};
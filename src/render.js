const list = document.querySelector('.contacts');

export const renderContact = ({name, number}) => {
  const contact = document.createElement('li');
  contact.classList.add('contact');

  contact.innerHTML = `
    <h2 class='contact__title'>
      ${name}
    </h2>
    <a href='tel:+380111111111'>
      ${number}
    </a>
`;
  list.append(contact);
};
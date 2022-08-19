const HOST = "https://contacts-api-learn.herokuapp.com/api/contacts";

export const request = async (method = 'GET', body = null) => {
  const data = await fetch(HOST, {
    method,
    body,
  });

  return await data.json();
};
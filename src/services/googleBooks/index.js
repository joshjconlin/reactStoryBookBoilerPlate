import request from 'superagent';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export async function searchBook(query) {
  const response = await request.get(`${BASE_URL}${query}`).send();
  return response.body;
}
/* eslint-disable quote-props */
export async function addBook(bookId, userId) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const body = {
    id: bookId,
  };
  const url = `http://api.readerzone.dev/user/${userId}/books`;
  // TODO: make this endpoint
  const response = await request.post(url).set(header).send(body);
  return response.statusCode === 201;
}

export async function fetchList(userId) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const url = `http://api.readerzone.dev/user/${userId}/books`;
  const response = await request.get(url).set(header).send();
  return response.body;
}

export async function fetchBook(bookId, userId) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const url = `http://api.readerzone.dev/user/${userId}/book/${bookId}`;
  const response = await request.get(url).set(header).send();
  return response.body;
}

export async function finishBook(bookId, userId) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const body = { id: bookId, completed: true };
  const url = `http://api.readerzone.dev/user/${userId}/book/${bookId}`;
  const response = await request.patch(url).set(header).send(body);
  return response.statusCode === 202;
}

export async function removeBook(bookId, userId) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const url = `http://api.readerzone.dev/user/${userId}/book/${bookId}`;
  const response = await request.delete(url).set(header).send();
  return response.statusCode === 204;
}

export async function rateBook(bookId, userId, values) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const url = `http://api.readerzone.dev/user/${userId}/book/${bookId}`;
  const response = await request.patch(url).set(header).send(values);
  return response.statusCode === 202;
}

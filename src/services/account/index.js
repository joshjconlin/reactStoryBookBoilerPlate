/* eslint-disable no-unused-vars*/
/* eslint-disable quote-props*/
import request from 'superagent';

// TODO: base url,

// async functions below
export async function updateAccount(userId, values) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const url = `http://api.readerzone.dev/user/${userId}/account`;
  const response = await request.patch(url).set(header).send(values);
  return response.statusCode === 202;
}

export async function deleteAccount(userId) {
  const token = localStorage.getItem('accessToken');
  const header = { 'Authorization': `Bearer ${token}` };
  const url = `http://api.readerzone.dev/user/${userId}/account`;
  const response = await request.delete(url).set(header).send();
  return response.statusCode === 204;
}

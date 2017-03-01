import request from 'superagent';

export async function forgotPassword(data) {
  const url = 'http://api.readerzone.dev/forgot';
  const response = await request.post(url).send({ email: data.get('email') });
  return response.statusCode === 202;
}

export async function login(email, password) {
  if (isLoggedIn()) {
    return true;
  }

  const body = {
    username: email,
    password,
    grant_type: 'password',
    scope: '*',
    client_id: 1,
    client_secret: 'RIsNFwSlmCHi2WtudJcFcttflVy4GIHLMk4tMnzt',
  };

  const response = await request.post('http://api.readerzone.dev/oauth/token').send(body);

  if (response.statusCode === 200) {
    setAccessToken(response.body.access_token, response.body.refresh_token);
    return await getMe();
  }

  return false;
}

export async function register(values) {
  const body = {
    first_name: values.get('first_name'),
    last_name: values.get('last_name'),
    email: values.get('email'),
    password: values.get('password'),
    terms: values.get('terms'),
    role: values.get('role_id'),
    organizer_name: values.get('organizer_name'),
    country_id: values.get('country_id'),
    state_id: values.get('state_id'),
  };
  const response = await request.post('http://api.readerzone.dev/auth/register').send(body);
  return response.statusCode === 201;
}
/* eslint-disable quote-props */
export async function getMe() {
  const response = await request.get('http://api.readerzone.dev/me').set({ 'Authorization': `Bearer ${getAccessToken().accessToken}` }).send();
  return response.body;
}

export async function logout() {
  clearAccessToken();
  return true;
}

export function isLoggedIn() {
  return getAccessToken().accessToken !== null;
}

export function getAccessToken() {
  return {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
}

export function setAccessToken(accessToken, refreshToken) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}

export function clearAccessToken() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}


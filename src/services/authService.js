import jwtDecode from 'jwt-decode';

import httpService from './httpService';

import { URL } from '../config.json';

const requestURL = URL.backend + '/login';
const key = 'token';

setJWT();

async function login(email, password) {
  const { data: jwt } = await httpService.post(requestURL, { email, password });
  localStorage.setItem(key, jwt);
}

function loginWithJWT(jwt) {
  localStorage.setItem(key, jwt);
  setJWT();
}

function logout() {
  localStorage.removeItem(key);
}

function getLoggedInUser() {
  try {
    const jwt = localStorage.getItem(key);
    return jwtDecode(jwt);
  } catch (exception) {
    return exception;
  }
}

function isUserLoggedIn() {
  return this.getCurrentUser() !== null;
}

function getJWT() {
  return localStorage.getItem(key);
}

function setJWT() {
  httpService.setJWTToken(getJWT());
}

export default {
  login,
  loginWithJWT,
  logout,
  getLoggedInUser,
  getJWT,
  setJWT,
  isUserLoggedIn
};

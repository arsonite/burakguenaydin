import jwtDecode from 'jwt-decode';

import httpService from './httpService';

import { URL } from '../config.json';

const requestURL = URL.backend + '/login';
const key = 'token';

setJWT();

async function login(username, password) {
  const jwt = await httpService.post(requestURL, {
    username,
    password
  });
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
  return this.getLoggedInUser() !== null;
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

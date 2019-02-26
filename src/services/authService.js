import jwtDecode from 'jwt-decode';

import httpService from './httpService';

import { URL } from '../config.json';

const requestURL = URL.backend + '/login';
const key = 'token';

httpService.setJWTToken(getJWT());

async function login(username, password) {
  const { data: jwt } = await httpService.post(requestURL, {
    username,
    password
  });
  localStorage.setItem(key, jwt);
  httpService.setJWTToken(getJWT());
}

function loginWithJWT(jwt) {
  localStorage.setItem(key, jwt);
  httpService.setJWTToken(getJWT());
}

function logout() {
  localStorage.removeItem(key);
}

function getLoggedInUser() {
  try {
    const jwt = localStorage.getItem(key);
    return jwtDecode(jwt);
  } catch (exception) {
    return null;
  }
}

function isUserLoggedIn() {
  return getLoggedInUser() !== null;
}

function getJWT() {
  return localStorage.getItem(key);
}

export default {
  login,
  loginWithJWT,
  logout,
  getLoggedInUser,
  isUserLoggedIn,
  getJWT
};

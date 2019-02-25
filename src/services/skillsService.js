import httpService from './httpService';

import { URL } from '../config.json';

const requestURL = URL.backend + '/skills';

let responseURL = '';

function getSkills() {
  responseURL = requestURL;
  return this;
}

function execute() {
  return httpService.get(responseURL);
}

export default {
  getSkills,
  execute
};

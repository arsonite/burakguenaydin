import http from './http';

import { backend } from '../config.json';

const rpc = backend + '/skills';
let url = '';

function getSkills() {
  url = rpc;
  return this;
}

function execute() {
  return http.get(url);
}

export default {
  getSkills,
  execute
};

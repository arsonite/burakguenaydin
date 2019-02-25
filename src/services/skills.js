import http from './http';

import { backend } from '../config.json';

const rpc = backend + '/skills';
let url = '';

function getSkills() {
  url = rpc;
  return this;
}

function execute() {
  url = url.slice(0, -1);
  return http.get(url);
}

export default {
  getSkills,
  execute
};

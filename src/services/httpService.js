import axios from 'axios';

axios.interceptors.response.use(null, error => {
  return Promise.reject(error);
});

function setJWTToken(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setJWTToken
};

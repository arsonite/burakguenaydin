import axios from 'axios';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log('Unkown error occured');
    }
  } else {
    console.log(error.response.data);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};

import { decode } from '../base64';

const api = {
  baseUrl: `https://api.github.com`,
  get(param) {
    return fetch(this.baseUrl + param)
      .then(res => res.json());
  },
  post(data, token = 'MWVmYmMwMDliNmVhOGY3NDIyMjI5NDk1MGNmZjZhNWMyM2RiY2VjNQ==') {
    fetch('https://api.github.com/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${decode(token)}`
      },
      body: JSON.stringify(data)
    });
  }
};

export default api;

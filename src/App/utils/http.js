const axios = require('axios').default;

export function makeHttpRequest(method, url, dto) {
  return axios({
    method,
    url,
    data: dto,
  });
}

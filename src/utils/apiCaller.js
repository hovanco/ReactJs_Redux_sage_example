import axios from 'axios';
import * as Configs from '../configs/api'

export default function callApi(endpoint, method = 'GET', body, token) {
  return axios({
    method: method,
    url: `${Configs.API_URL}/${endpoint}`,
    data: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  }).catch(err => {
    console.log(err);
  });
};

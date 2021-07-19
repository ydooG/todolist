import axios from "axios";
import Routes from "../src/api/Routes";
import {authHeader} from "../helpers/auth-header";

export const USER_FIELD_NAME = 'user';
export const TOKEN_FIELD_NAME = 'token';

const userService = {
  login,
  logout,
  singup,
  isAuthenticated
};

function login(username, password) {
  return axios.request({
    url: Routes.LOGIN,
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({username, password})
  })
    .then(function (resp_data) {
      if (resp_data.data.access) {
        let token = resp_data.data.access;
        localStorage.setItem(TOKEN_FIELD_NAME, token)
        localStorage.setItem(USER_FIELD_NAME, JSON.stringify(resp_data.data.user));
      }
      return resp_data;
    })
}

function logout() {
  localStorage.removeItem(USER_FIELD_NAME);
}

function singup(username, password) {
  return axios.request({
    url: Routes.SIGNUP,
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({username, password})
  })
}

function isAuthenticated() {
  return !!authHeader();
}
export default userService;

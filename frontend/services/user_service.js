import axios from "axios";
import Routes from "../src/api/Routes";
import {authHeader} from "../helpers/auth-header";

export const USER_OBJECT_NAME = 'user';
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
        let username = resp_data.data.username;
        let token = resp_data.data.access;
        localStorage.setItem(USER_OBJECT_NAME, JSON.stringify({username, token}));
      }
      return resp_data;
    })
}

function logout() {
  localStorage.removeItem(USER_OBJECT_NAME);
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
  return authHeader() !== {};
}
export default userService;

import {USER_FIELD_NAME, TOKEN_FIELD_NAME} from "../services/user_service";

export function authHeader() {
  let user = JSON.parse(localStorage.getItem(USER_FIELD_NAME));
  let token = localStorage.getItem(TOKEN_FIELD_NAME);
  if (user && token) {
    return {'Authorization': 'Bearer ' + token};
  } else {
    return null;
  }
}

export function getUser() {
  return JSON.parse(localStorage.getItem(USER_FIELD_NAME));
}

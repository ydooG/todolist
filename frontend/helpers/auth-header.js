import {USER_OBJECT_NAME} from "../services/user_service";

export function authHeader() {
    let user = JSON.parse(localStorage.getItem(USER_OBJECT_NAME));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

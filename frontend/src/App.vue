<template>
  <div id="app" class="container-fluid text-center">
    <h1 class="text-info">{{ title }}</h1>
    <p>{{ msg }}</p>

    <form v-if="!isAuthenticated" @submit.prevent="handleLogin">
      <label for="input_username">Username</label>
      <input id="input_username" type="text" name="username">
      <label for="input_password">Password</label>
      <input id="input_password" type="password" name="password">
      <br>
      <button type="submit" @click="">Войти</button>
    </form>
    <ToDoList v-else></ToDoList>


  </div>
</template>

<script>
import Routes from "./api/Routes";
import userService from "../services/user_service";
import {authHeader} from "../helpers/auth-header";
import ToDoList from "./components/ToDoList";

export default {
  name: 'app',
  components: {ToDoList},
  data () {
    return {
      title: 'VueDo List',
      msg: 'Welcome to Your First ToDo List App with Vue.js',
      login_url: Routes.LOGIN
    }
  },
  methods: {
      handleLogin: function (event) {
        let username = event.target.elements.username.value;
        let password = event.target.elements.password.value;
        let result = userService.login(username, password);
        this.$forceUpdate();
      }
    },
  computed: {
    isAuthenticated: function () {
      return userService.isAuthenticated();
    }
  }
}
</script>

<style>
</style>

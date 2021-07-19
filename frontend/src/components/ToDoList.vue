<template>
  <div class="to-do-list">
    <h4>Task List</h4>
    <table class="to-do-table m-auto">
      <tr>
        <th>Название</th>
        <th>Описание</th>
        <th>Дата создания</th>
        <th>Сделано</th>
      </tr>
      <ToDoItem :data="item" v-for="item in items"></ToDoItem>
    </table>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
import Routes from "../api/Routes";

import axios from "axios";
import {getUser} from "../../helpers/auth-header";

export default {
  name: "ToDoList",
  components: {ToDoItem},
  data: function () {
    return {
      items: []
    }
  },
  mounted: function () {
    this.fetchTasks();
  },
  methods: {
    fetchTasks: function () {
      let user = getUser();
      console.log(user);
      if (user) {
        axios.request({
          url: Routes.TASK_LIST,
          method: 'GET',
          params: {user: user.id}
        }).then((result) => this.items = result.data)
      }
    }
  }
}
</script>

<style scoped>

</style>

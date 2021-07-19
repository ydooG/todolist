<template>
  <div class="to-do-list">
    <h4>Task List</h4>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
import Routes from "../api/Routes";

import axios from "axios";

export default {
  name: "ToDoList",
  data: function () {
    return {
      items: []
    }
  },
  mounted: function () {

  },
  methods: {
    fetchTasks: function () {
      axios.request({

      }).then()
    }
  }
}
</script>

<style scoped>

</style>

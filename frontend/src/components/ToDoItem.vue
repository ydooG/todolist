<template>
    <tr>
      <td>{{ data.title }}</td>
      <td>{{ data.description }}</td>
      <td>{{ data.created_at }}</td>
      <td><input type="checkbox" :checked="this.data.is_done"></td>
    </tr>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ['data',]
}
</script>

<style scoped>

</style>

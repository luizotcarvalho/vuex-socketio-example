<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <Todo :todo="todo"></Todo>
        </li>
    </ul>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "TodoList",
  props: {
    todos: Array
  },
  components: {
    Todo
  }
};
</script>
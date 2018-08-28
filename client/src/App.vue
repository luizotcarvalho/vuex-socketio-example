<template>
  <div id="app">
    <input type="text" placeholder="add todo" @keyup.enter="addTodo()" v-model="newTodoText"/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import store from "./store";
import { ADD_TODO } from "./types";

export default {
  name: "app",

  data: function() {
    return {
      todos: store.state.todos,
      newTodoText: ""
    };
  },
  methods: {
    addTodo() {
      store.dispatch({
        type: ADD_TODO,
        todo: {
          text: this.newTodoText,
          done: false
        }
      });
      this.newTodoText = "";
    }
  },
  components: {
    TodoList
  }
};
</script>

<style>
</style>

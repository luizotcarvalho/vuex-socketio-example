<template>
    <span>
        <strong v-if="todo.done">FEITO</strong> 
        <span @click="toggleDone()">{{todo.text}}</span> - 
        <a @click="removeTodo()">remover</a>
    </span>
</template>

<script>
import store from "../store";
import { TOGGLE_DONE, REMOVE_TODO } from "../types";

export default {
  name: "Todo",
  props: {
    todo: Object
  },
  methods: {
    toggleDone() {
      store.dispatch({
        type: TOGGLE_DONE,
        todo: this.todo
      });
    },
    removeTodo() {
      store.dispatch({
        type: REMOVE_TODO,
        todo: this.todo
      });
    }
  }
};
</script>
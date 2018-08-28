import Vue from "vue";
import Vuex from "vuex";

import socket from "./socket";
import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE, SOCKET_LOAD_TODOS } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    [SOCKET_LOAD_TODOS](state, payload) {
      payload[0].todos.map(todo => state.todos.push(todo));
    },

    [ADD_TODO](state, todo) {
      state.todos.push(todo);
    },

    [REMOVE_TODO](state, todo) {
      const index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    },

    [TOGGLE_DONE](state, todo) {
      const index = state.todos.indexOf(todo);
      state.todos.splice(index, 1, {
        ...todo,
        done: !todo.done
      });
    }
  },
  actions: {
    [ADD_TODO]({ commit }, payload) {
      const { todo } = payload;
      commit(ADD_TODO, todo);
      socket.emit("addTodo", todo);
    },

    [REMOVE_TODO]({ commit }, payload) {
      const { todo } = payload;
      commit(REMOVE_TODO, todo);
      socket.emit("removeTodo", todo);
    },

    [TOGGLE_DONE]({ commit }, payload) {
      const { todo } = payload;
      commit(TOGGLE_DONE, todo);
      socket.emit("toggleDone", todo);
    }
  }
});

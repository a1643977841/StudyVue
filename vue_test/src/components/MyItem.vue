<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="removeTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: {
    todo: {
      type: Object,
      required: true // 必要的
    },
    checkTodo: {
      type: Function,
      required: true // 必要的
    },
    deleteTodo: {
      type: Function,
      required: true // 必要的
    }
  },
  methods: {
    handleCheck(todoId) {
      this.checkTodo(todoId)
    },
    removeTodo(todoId) {
      if (confirm('确定删除吗')) {
        this.deleteTodo(todoId)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;

  border-bottom: 1px solid #ddd;
  padding: 0 5px;
  height: 36px;

  line-height: 36px;
}

li label {
  float: left;

  cursor: pointer;
}

li label li input {
  position: relative;
  top: -1px;

  margin-right: 6px;

  vertical-align: middle;
}

li button {
  display: none;
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>

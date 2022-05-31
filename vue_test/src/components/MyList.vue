<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :check-todo="checkTodo" :delete-todo="deleteTodo" />
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
  name: 'MyList',
  components: { MyItem },
  props: {
    todos: {
      type: Array,
      required: true // 必要的
    },
    checkTodo: {
      type: Function,
      required: true // 必要的
    },
    deleteTodo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  height: 40px;

  line-height: 40px;
}
</style>

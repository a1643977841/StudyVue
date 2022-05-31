<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <!-- 头部 -->
          <MyHeader :add-todo="addTodo"></MyHeader>
          <!-- 列表 -->
          <MyList :todos="todos" :check-todo="checkTodo" :delete-todo="deleteTodo"></MyList>
          <!-- 底部 -->
          <MyFooter :todos="todos"></MyFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import MyList from './components/MyList'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
export default {
  name: 'App',
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: [
        { id: '001', title: '抽烟', done: true },
        { id: '002', title: '吃饭', done: false },
        { id: '003', title: '喝酒', done: true }
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    checkTodo(todoId) {
      this.todos.forEach(todo => {
        if (todo.id === todoId) {
          todo.done = !todo.done
          return
        }
      })
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId)
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;

  margin-bottom: 0;
  border-radius: 4px;
  padding: 4px 12px;

  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);

  cursor: pointer;
}

.btn-danger {
  border: 1px solid #bd362f;

  color: #fff;
  background-color: #da4f49;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  margin: 0 auto;
  width: 600px;
}
.todo-container .todo-wrap {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}
</style>

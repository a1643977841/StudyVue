<template>
  <div class="todo-header">
    <input v-model="title" type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'MyHeader',
  props: {
    addTodo: {
      type: Function,
      required: true // 必要的
    }
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add(e) {
      if (!this.title.trim()) return alert('名称不能为空')
      // 输入的信息，封装为对象
      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false
      }
      // 调用app组件的addTodo方法
      this.addTodo(todoObj)
      this.title = ''
    }
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  width: 560px;
  height: 28px;

  font-size: 14px;
}

.todo-header input:focus {
  border-color: rgba(82, 168, 236, 0.8);

  outline: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

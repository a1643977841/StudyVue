<template>
  <div v-show="total" ref="tableRef" class="todo-footer">
    <label>
      <input :checked="isAll" type="checkbox" @change="checkAllTodo" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span>
      / 全部{{ total }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        if (current.done) pre++
        return pre
      }, 0)
    },
    isAll() {
      return this.total === this.doneTotal
    }
  },
  methods: {
    checkAllTodo(e) {
      console.log(e.target.checked)
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  margin-top: 5px;
  padding-left: 6px;
  height: 40px;

  line-height: 40px;
}

.todo-footer label {
  display: inline-block;

  margin-right: 20px;

  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;

  margin-right: 5px;

  vertical-align: middle;
}

.todo-footer button {
  float: right;

  margin-top: 5px;
}
</style>

<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span>
      <span>已完成0</span>
      / 全部2
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
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

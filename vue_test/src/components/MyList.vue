<template>
  <ul class="todo-main">
    <MyItem></MyItem>
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
  name: 'MyList',
  components: { MyItem }
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

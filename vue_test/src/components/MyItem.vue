<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>xxxxx</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem'
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

</style>

<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生地址：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: 'ahao',
      age: 23
    }
  },

  mounted() { },

  methods: {
    add() {
      console.log('2')
    }
  }
}
</script>

<style>
</style>

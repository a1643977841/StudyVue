<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生你年龄：{{ myAge }}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  props: {
    name: {
      type: String,
      default: '张三',
      required: true // 必要的
    },
    sex: {
      type: String,
      default: '男'
    },
    age: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      myAge: 0
    }
  },
  watch: {
    age: {
      handler(val) {
        this.myAge = val
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {},

  methods: {
    updateAge() {
      // 年龄不允许修改
      // this.age = 22
    }
  }
}
</script>

<style></style>

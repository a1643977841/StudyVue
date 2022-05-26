<template>
  <div>
    <h2 @click="showName">学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  mixins: [mixin],
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  },

  methods: {
    // showName() {
    //   alert(this.name)
    // }
  }
}
</script>

<style></style>

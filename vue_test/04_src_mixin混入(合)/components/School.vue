<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  mixins: [mixin],
  data() {
    return {
      name: '北京大学',
      address: '北京'
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

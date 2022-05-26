<template>
  <div>
    <School></School>
    <Student />
  </div>
</template>

<script>
// 引入组件
import Student from './components/Student'
import School from './components/School'
export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data() {
    return {}
  }
}
</script>

<style></style>

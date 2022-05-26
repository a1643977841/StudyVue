export default {
  install(Vue, x, y, z) {
    console.log('插件调用')
    console.log('参数：', x, y, z)
    // 全局过滤器
    Vue.filter('mySlice', function (value) {
      return value.slice(0, 4)
    })
    // 全局自定义指令
    Vue.directive('fbind2', {
      // 指令与元素成功绑定的时候
      bind(element, binding) {
        element.value = binding.value
      },
      // 指令所在元素被插入页面的时候
      inserted(element, binding) {
        element.focus()
      },
      // 指令所在的模板被重新解析的时候
      update(element, binding) {
        element.value = binding.value
        element.focus()
      }
    })
    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      }
    })
    Vue.prototype.hello = () => {
      alert('你好啊')
    }
  }
}

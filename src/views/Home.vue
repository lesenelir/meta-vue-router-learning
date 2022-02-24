<template>
  <h2>首页</h2>
  <button @click="goBack">路由往回跳</button>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <h2>分类</h2>
</template>

<script>
export default {
  name: 'Category',
  created () {
    console.log(this.$route)
    // 使用  /category/:id  跳转携带参数，最终会出现在 this.$route.params.id
    // 使用  /category?id=xxx  跳转携带参数，最终会出现在 this.$route.query.id
    // 使用 this.$router.push({ path: '/category', query: { key, value} }) 最终会出现在 this.$route.query中
    // 使用 this.$router.push({ name: 'Category', params: { id: 168 } }) 最终会出现在 this.$route.params中 【可以不在url中显示参数，隐藏参数】
  }
}
</script>

<style scoped>

</style>

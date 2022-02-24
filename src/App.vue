<template>
  <!--  keep-alive缓存 页面-->
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

  <ul class="nav">
    <li :class="{active: $route.path === '/home'}" @click="goHome">首页</li>
    <li :class="{active: $route.path === '/category'}" @click="goCategory">分类</li>
    <li :class="{active: $route.path === '/cart'}" @click="goCart">购物车</li>
    <li :class="{active: $route.path === '/user'}" @click="goUser">用户</li>
  </ul>
</template>

<script>
// 路由router多为进行跳转；路由route多为获取当前信息

export default {
  name: 'App',
  methods: {
    goHome () {
      // 进行页面跳转
      this.$router.push('/home')
      // 获取当前路由
      // console.log(this.$route)
      console.log(this.$route.path)
    },
    goCategory () {
      // 路由跳转携带参数方法1：
      // this.$router.push('/category/789')  // 跳转携带参数方法1
      // this.$router.push('/category?id=456')  // 跳转携带参数方法2
      // this.$router.push({ path: '/category', query: { id: 123, username: 'lesenelir' } }) // 跳转携带参数方法3
      this.$router.push({ name: 'Category', params: { id: 168 } }) // 跳转携带参数方法4 【常用】
    },
    goCart () {
      this.$router.push('/cart')
    },
    goUser () {
      this.$router.push('/user')
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
}

body {
  background: #ccc;
}

.nav {
  position: fixed;
  background: #fff;
  border-top: 1px solid #efefef;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

li.active {
  font-weight: bold;
  color: palevioletred;
}

</style>

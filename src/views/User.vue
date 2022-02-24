<template>
  <h2>用户</h2>

  <label for="username">用户名：</label>
  <input type="text" id="username">
  <hr>
  <label for="password">密码：</label>
  <input type="password" id="password">
  <hr>
  <button @click="btnClick">登录</button>

</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    btnClick () {
      // token - 用户登录凭证
      if (this.username === 'admin' && this.password === 'admin') {
        localStorage.setItem('token', 'ppp000')
        alert('登录成功')
      }
    }
  }
}
</script>

<style scoped>

</style>

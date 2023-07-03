<template>
  <div class="container relative ">
    <div class="font-medium  login-sign">注册</div>
    <img src="@/assets/logo.png" class="login-logo m-auto" alt="logo">
    <div class="font-semibold login-login-btn ">登录</div>
    <div>您好，欢迎来到 yike！</div>
    <input type="text">
    <input type="password">
  </div>
</template>

<script setup>
import { px2vw } from '../../util';
import { onMounted } from 'vue'
onMounted(()=>{
console.log(px2vw(56));
})
</script>

<style scoped>
.login-sign {
  font-size: 18px;
  margin-top: 10px;
  margin-left: 310px;
  color: #333333;
  text-align: right;
  width: 36px;
}

.login-logo {
  margin-top: 40px;
  width: 96px;
}

.login-login-btn {
  width: 56px;
  height: 40px;
  font-size: 28px;
  color: #272832;
  letter-spacing: 0;
  margin-top: 27.18px;
  margin-left: 29px;
}
</style>
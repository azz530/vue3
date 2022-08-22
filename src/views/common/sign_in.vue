<template>
  <div class="page">
    <div class="login_form">
      <div class="title">登录</div>
      <div class="form_item">
        <input v-model="username" type="text" placeholder="请输入用户名" />
      </div>
      <div class="form_item">
        <input v-model="password" type="password" placeholder="请输入密码" />
      </div>
      <div class="btnList">
        <button @click="login">登录</button>
        <button @click="reset">重置</button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ElMessage } from "element-plus";
import { ref } from "vue";
const username = ref("");
const password = ref("");
const login = () => {
  if (username.value !== "" && password.value !== "") {
  } else {
    ElMessage.error("请输入用户名和密码");
  }
};
const reset = () => {
  username.value = "";
  password.value = "";
};
</script>
<style lang='scss' scoped>
.page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right top,
    #7ea7d7,
    #6eb0e0,
    #59b9e7,
    #3fc1ea,
    #12caeb
  );
  .login_form {
    height: 420px;
    width: 400px;
    border: 1px solid #ddd;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1);
    .title {
      text-align: center;
      font-size: 28px;
      color: rgb(128, 161, 252);
      margin: 40px 0px 30px 0px;
      font-weight: 600;
    }
    .form_item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0px 20px 0px;
      input {
        height: 40px;
        width: 85%;
        padding-left: 5px;
        border: none;
        border-bottom: 1px solid #ddd;
        background-color: transparent;
        &:focus {
          outline: none;
        }
        &::-webkit-input-placeholder {
          color: rgb(163, 161, 161);
        }
      }
    }
    .btnList {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        width: 85%;
        height: 35px;
        background-color: transparent;
        border: 1px solid #ddd;
        border-radius: 20px;
        margin-bottom: 10px;
        &:nth-child(1) {
          background-color: rgb(128, 161, 252);
          color: #fff;
          &:hover {
            cursor: pointer;
            outline: none;
            background-color: rgb(46, 105, 243);
          }
        }
        &:nth-child(2) {
          &:hover {
            cursor: pointer;
            outline: none;
            background-color: rgb(247, 248, 251);
          }
        }
      }
    }
  }
}
</style>
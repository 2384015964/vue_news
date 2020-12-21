<template>
  <div>
    <van-nav-bar
      class="app-nav-bar"
      left-arrow
      title="登录"
      @click-left="$router.back()"
    />
    <van-form
      @submit="onlogin"
      @failed="onfailed"
      :show-error="false"
      :show-error-message="false"
    >
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          icon-prefix="toutiao"
          left-icon="shouji"
          right-icon="warning-o"
          placeholder="请输入用户名"
          :rules="fromrules.username"
        />
        <van-field
          v-model="user.code"
          clearable
          type="password"
          icon-prefix="toutiao"
          left-icon="yanzhengma"
          placeholder="请输入密码"
          :rules="fromrules.password"
        >
        </van-field>
      </van-cell-group>
      <van-button class="login-btn" type="info" block round>登录</van-button>
    </van-form>
  </div>
</template>

<script>
import { login } from "@/api/user";
import { Toast } from "vant";
export default {
  data() {
    return {
      user: {
        mobile: "",
        code: ""
      },
      fromrules: {
        username: [
          { requierd: true },
          { pattern: /^\d{11}$/, message: "账号格式错误" }
        ],
        password: [
          { requierd: true },
          { pattern: /^\d{6}$/, message: "密码格式错误" }
        ]
      }
    };
  },
  methods: {
    async onlogin() {
      Toast.loading({
        message: "登录中..."
      });
      try {
        let raw = { mobile: this.user.mobile, code: this.user.code };
        const res = await login(raw);
        console.log("返回的数据", res);
        if (res.status === 201) {
          Toast.success({
            message: `登录成功`
          });
          this.$store.commit("setUser", res.data.data.token);
          this.$router.push(this.$route.query.redirect || "/");
        }
      } catch (err) {
        console.log(err);
        this.$toast.fail("登录失败，手机号或验证码错误");
      }
    },
    onfailed(error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message, // 提示消息
          position: "top" // 防止手机键盘太高看不见提示消息
        });
      }
    }
  }
};
</script>

<style>
.send-btn {
  background-color: #ededed;
}
.login-btn {
  top: 20px;
  width: 90%;
  margin-left: 5%;
  background-color: #6db4fb;
  border: none;
  border-radius: 2rem;
}
</style>

<template>
  <div>
    <router-view />
    <van-tabbar
      v-model="active"
      active-color="#0000ff"
      inactive-color="#000"
      route
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/userinfo"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "layoutname",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style></style>

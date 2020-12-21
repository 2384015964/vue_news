<template>
  <div>
    <van-cell-group v-if="currentuser.name">
      <van-cell :border="false" class="base-info" title="单元格" center>
        <van-image
          cover
          round
          slot="icon"
          width="1.8rem"
          height="1.8rem"
          :src="currentuser.photo"
        >
          <template v-slot:error>加载失败</template>
        </van-image>
        <div class="uname" slot="title">
          {{ !currentuser.name ? "未登录" : currentuser.name }}
        </div>
        <van-button round>编辑资料</van-button>
      </van-cell>
      <van-grid :border="false">
        <van-grid-item>
          <div slot="text">
            <div class="span">0</div>
            <div>文章</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">0</div>
            <div class="text">用户</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">0</div>
            <div>粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">0</div>
            <div>关注</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-cell-group v-else>
      <van-cell :border="false" class="no-info" center>
        <!-- <van-image
          round
          slot="icon"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2349859212,1053714951&fm=26&gp=0.jpg"
          width="2rem"
          height="2rem"
          @click="$router.push({ path: '/login', replace: true })"
        >
        </van-image> -->
        <van-cell>
          <div @click="$router.push({ path: '/login', replace: true })">
            <img src="../../assets/img/login1.png" alt="" />
            <div class="uname">点击登录</div>
          </div>
        </van-cell>
      </van-cell>
    </van-cell-group>
    <van-grid :column-num="2">
      <van-grid-item class="bgwhite" icon="star-o" text="收藏"></van-grid-item>
      <van-grid-item
        class="bgwhite"
        icon="browsing-history-o"
        text="历史"
      ></van-grid-item>
    </van-grid>
    <van-cell class="jianxi" title="URL 跳转" is-link url="/vant/mobile.html" />
    <van-cell class="jianxi" title="路由跳转" is-link to="index" />
    <div v-if="currentuser.name">
      <van-button class="loginbtn" @click="onloginout">退出登录</van-button>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getCurrentUser } from "@/api/user";
// import store from "@/store/";
export default {
  data() {
    return {
      currentuser: {}
    };
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    this.loaduserinfo();
  },
  methods: {
    async loaduserinfo() {
      try {
        const res = await getCurrentUser();
        console.log("已经请求", res);
        this.currentuser = res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    onloginout() {
      this.$dialog
        .confirm({
          message: "确认要退出吗？",
          title: "退出登录"
        })
        .then(() => {
          this.$store.commit("setUser", null);
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="less">
.van-cell-group {
  background-image: url("../../assets/img/userbg.jpg");
  .base-info {
    background-color: unset;
  }
  .no-info {
    background-color: unset;
    justify-content: center;
    padding: 30px;
    .van-cell {
      background-color: unset;
    }
    .van-cell__value--alone {
      text-align: center;
    }
  }
  .van-grid-item__content {
    background-color: unset;
  }
  .span {
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
  }
}
.uname {
  margin-left: 15px;
  font-size: 0.5rem;
  color: white;
}
.jianxi {
  margin-top: 10px;
}
.loginbtn {
  top: 8px;
  width: 100%;
  color: red;
  border: none;
}
</style>

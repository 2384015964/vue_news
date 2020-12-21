<template>
  <div>
    <van-nav-bar class="nav-bg">
      <van-button class="searchbtn" slot="title" icon="search">搜索</van-button>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab
        v-for="channel in channels"
        :title="channel.name"
        :key="channel.id"
      >
        <activelist :channel="channel"></activelist>
      </van-tab>
      <div slot="nav-right" class="zhanwei"></div>
      <div @click="showchannel = true" slot="nav-right" class="nav-icon-btn">
        <van-icon name="wap-nav"></van-icon>
      </div>
    </van-tabs>
    <van-popup
      v-model="showchannel"
      position="bottom"
      closeable
      close-icon-position="top-left"
      class="show-channel-edit"
    >
      <channeledit></channeledit>
    </van-popup>
  </div>
</template>
<script>
import { getonloadlist } from "@/api/user";
import Activelist from "../../components/Activelist";
import Channeledit from "../../components/Channel-edit";
export default {
  name: "home",
  data() {
    return {
      inputtext: "",
      active: 0,
      showchannel: true,
      channels: {}
    };
  },
  components: {
    Activelist,
    Channeledit
  },
  created() {
    this.onloadlist();
  },
  methods: {
    async onloadlist() {
      const res = await getonloadlist();
      // console.log("数据列表", res);
      this.channels = res.data.data.channels;
      // console.log(this.channels);
    }
  }
};
</script>
<style lang="less">
.van-nav-bar {
  background-color: #2892ff;
  .van-icon {
    color: white;
  }
  .van-nav-bar__title {
    max-width: unset;
  }
  .searchbtn {
    border-radius: 20px;
    height: 0.8rem;
    width: 277px;
    border: none;
    color: white;
    background: #52a8ff;
  }
}
.zhanwei {
  width: 33px;
  flex-shrink: 0;
}
.nav-icon-btn {
  display: flex;
  align-items: center;
  position: fixed;
  height: 44px;
  right: 0;
  background-color: #fff;
}
.van-tabs__line {
  background-color: #2892ff;
}
.van-tabs__wrap--scrollable .van-tab {
  padding: 0 0.75rem;
}
.show-channel-edit {
  height: 100%;
}
</style>

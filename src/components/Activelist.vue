<template>
  <div>
    <van-list
      class="activelist"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-pull-refresh
        v-model="isRefresh"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <activeitem
          v-for="(active, index) in activelists"
          :key="index"
          :active="active"
        ></activeitem>
        <!-- <van-cell
          v-for="(active, index) in activelists"
          :key="index"
          :title="active.title"
        /> -->
      </van-pull-refresh>
    </van-list>
  </div>
</template>

<script>
import { getactivelist } from "@/api/activelist";
import Activeitem from "./Activeitem";
export default {
  name: "Activelist",
  components: { Activeitem },
  data() {
    return {
      activelists: [],
      loading: false,
      finished: false,
      timestamp: null,
      isRefresh: false
    };
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onLoad() {
      const res = await getactivelist({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      });
      //   console.log(res);
      this.activelists.push(...res.data.data.results);
      this.loading = false;
      if (res.data.data.results.length !== 0) {
        this.timestamp = res.data.data.pre_timestamp;
        this.activelists.length >= 100
          ? (this.finished = true)
          : (this.finished = false);
      } else {
        this.finished = true;
      }
    },
    async onRefresh() {
      const res = await getactivelist({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      });
      // console.log(res);
      this.activelists.unshift(...res.data.data.results);
      this.isRefresh = false;
    }
  }
};
</script>
<style lang="less">
.activelist {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}
</style>

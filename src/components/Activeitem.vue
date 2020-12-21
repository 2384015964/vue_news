<template>
  <van-cell class="activeitem">
    <div slot="title" class="title van-multi-ellipsis--l3">
      {{ active.title }}
    </div>
    <div slot="label">
      <div class="cover" v-if="active.cover.type === 3">
        <div
          class="cover-wrap-list"
          v-for="(img, index) in active.cover.images"
          :key="index"
        >
          <van-image class="cover-img" fit="cover" :src="img"> </van-image>
        </div>
      </div>
      <div class="label-bottom">
        <span>作者:{{ active.aut_name }} </span>
        <span>评论 {{ active.comm_count }} </span>
        <span>{{ active.pubdate | relativeTime }}</span>
      </div>
    </div>
    <van-image
      class="right-cover"
      v-if="active.cover.type === 1"
      fit="cover"
      :src="active.cover.images[0]"
    >
    </van-image>
  </van-cell>
</template>

<script>
import "vant/lib/index.css";
import Vue from "vue";
import Vant from "vant";
Vue.use(Vant);
// Vue.use(Vant);
export default {
  name: "Activeitem",
  props: {
    active: {
      type: Object,
      requied: true
    }
  }
};
</script>

<style lang="less">
.right-cover {
  width: 116px;
  height: 73px;
}
.cover {
  display: flex;
  .cover-wrap-list {
    flex: 1;
    height: 73px;
    .cover-img {
      width: 100%;
      height: 73px;
    }
  }
}
.label-bottom span {
  margin-right: 12px;
}
</style>

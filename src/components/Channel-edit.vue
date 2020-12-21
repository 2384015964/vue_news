<template>
  <div class="channel-edit">
    <van-cell center :border="false">
      <div slot="title">我的频道</div>
      <van-button class="editbtn" round plain size="small" type="danger">
        编 辑
      </van-button>
    </van-cell>
    <van-grid :gutter="20">
      <van-grid-item v-for="value in 8" :key="value">
        <div slot="text">内容</div>
      </van-grid-item>
    </van-grid>
    <van-cell center :border="false">
      <div slot="title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="20">
      <van-grid-item v-for="value in 8" :key="value">
        <div slot="text">内容</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "channel-edit"
};
</script>

<style lang="less">
.channel-edit {
  margin-top: 10%;
  .editbtn {
    height: 20px;
  }
}
</style>

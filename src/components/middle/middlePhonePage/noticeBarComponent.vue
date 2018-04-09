<template>
  <div class="notice_bar_component_wrap">
      <van-notice-bar
        text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
        left-icon="http://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
        />
  </div>
</template>

<script>
import Vue from 'vue';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
export default {
    name: 'NoticeBarComponent',
    data() {
        return {

        }
    }
}
</script>

<style>

</style>

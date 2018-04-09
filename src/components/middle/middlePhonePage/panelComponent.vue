<template>
  <div class="panel_component_wrap">
      <van-panel title="标题" desc="描述信息" status="状态">
        <div class="content_box">这里填充的是内容</div>
    </van-panel>
  </div>
</template>

<script>
import Vue from "vue";
import { Panel } from "vant";

Vue.use(Panel);
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="less" scoped>
@import '../../../../static/less/mianShow.less';
.panel_component_wrap {

    .content_box {
        font-size: @mainFontSize;
        line-height: @mainListHeight;
        padding: 0 @mainPadding;
    }
}
</style>

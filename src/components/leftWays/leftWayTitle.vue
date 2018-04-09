<template>
  <div class="left_way_title_wrap">
      <i :class="['iconfont', iconname]"></i>
      <span>{{titletext}}</span>
  </div>
</template>

<script>
export default {
    name: 'LeftWayTitle',
    data() {
        return {}
    },
    props: ['iconname', 'titletext']
}
</script>

<style lang="less" scoped>
@import '../../../static/less/mianShow.less';
.left_way_title_wrap {
    display: flex;
    height: @mainListHeight;
    align-items: center;
    padding: 0 @mainPadding;
    border-bottom: @mainBorder; 
    i {
        font-size: @mainFontSize;
        margin-right: @mainMarginRight;
    }
    span {
        font-size: @mainFontSize;
    }
}
</style>

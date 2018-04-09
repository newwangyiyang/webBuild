<template>
  <div class="left_list_title_wrap">
      <span>名称</span>
      <span>操作</span>
  </div>
</template>

<script>
export default {
    name: 'LeftListTitle',
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/mianShow.less';
.left_list_title_wrap {
    display: flex;
    height: @mainListHeight;
    align-items: center;
    justify-content: space-between;
    padding: 0 @mainPadding;
    border-bottom: @mainBorder;
    margin-bottom: @mainMarginRight; 
    span {
        font-size: @mainFontSize;
    }
}
</style>

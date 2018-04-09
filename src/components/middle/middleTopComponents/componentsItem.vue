<template>
  <div class="components_item_wrap">
      <span>{{itemdata.componentName}}</span>
      <i class="iconfont icon-jia"></i>
  </div>
</template>

<script>
export default {
    name: 'ComponentsItem',
    data() {
        return {}
    },
    props: ['itemdata']
}
</script>

<style lang="less" scoped>
@import '../../../../static/less/mianShow.less';
.components_item_wrap {
    display: flex;
    width: 50px;
    justify-content: space-between;
    height: @mainHeight;
    align-items: center;
    color: #fff;
    font-size: @mainFontSize;
    background-color: #8395a7;
    border-radius: @mainBorderRadius; 
    padding: 0 3px;
    margin-bottom: 5px;
    i {
        font-size: 8px;
    }
}
</style>

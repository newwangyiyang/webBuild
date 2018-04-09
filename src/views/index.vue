<template>
  <div class="index_wrap">
      <div class="left_box">
          <left-way-title :iconname="'icon-liebiao1'" :titletext="'操作步骤'" />
          <left-list-title />
        <left-way-item  :listdata="leftNameList" />
      </div>
      <div class="middle_box">
          <middle-index />
      </div>
      <div class="right_box">
          <right-show-index />
      </div>
  </div>
</template>

<script>
import leftWayItem from '@/components/leftWays/leftWayItem';
import leftWayTitle from '@/components/leftWays/leftWayTitle';
import leftListTitle from '@/components/leftWays/leftListTitle';
import middleIndex from '@/components/middle/middleIndex';
import rightShowIndex from '@/components/rightShow/rightShowIndex';
import { mapState } from 'vuex';
export default {
    name: 'Index',
    data() {
        return {}
    },
    computed: {
        ...mapState(['leftNameList'])
    },
    components: {
        leftWayItem,
        leftWayTitle,
        leftListTitle,
        middleIndex,
        rightShowIndex
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
@import '../../static/less/mianShow.less';
.index_wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    .left_box {
        flex: 2.5;
        border-right: @mainBorder; 
    }
    .middle_box {
        flex: 5;
    }
    .right_box {
        flex: 2.5;
    }
}
</style>


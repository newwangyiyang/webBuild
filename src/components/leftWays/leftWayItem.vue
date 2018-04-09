<template>
  <div class="left_way_item">
      <div v-for="(item, index) in nameList" :key="item.id">
          <span>{{item.componentsName}}</span>
            <strong @click="deleItem({index: index, id: item.id})">
                <van-icon name="delete" />
            </strong>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);

import {mapMutations} from 'vuex';
export default {
    name: 'LeftWayItem',
    data() {
        return {
            nameList: this.listdata
        }
    },
    props: ['listdata'],
    methods: {
        ...mapMutations(['deleItem'])
    },
    created() {

    },
}
</script>

<style lang="less" scoped>
@import '../../../static/less/mianShow.less';
.left_way_item {
    >div {
        height: @mainListHeight;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 @mainPadding;
        font-size: @mainFontSize;
        strong {
            background-color: #ee5253;
            padding: 3px;
            i {
                color: #fff;
                font-size: 6px;
            }
        }
    }
}
</style>

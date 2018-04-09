<template>
  <div class="right_show_index_wrap">
      <left-way-title :iconname="'icon-shuru'" :titletext="'编辑样式及文本'"/>
      <component :is="getEditObj.editComponentName" v-if="getEditObj" />
  </div>
</template>

<script>
import navBarEdit from './navBarEdit';
import leftWayTitle from '../leftWays/leftWayTitle';
import {mapGetters} from 'vuex';
export default {
    name: 'RightShowIndex',
    data() {
        return {}
    },
    created() {

    },
    computed: {
        ...mapGetters(['getEditObj'])
    },
    components: {
        navBarEdit,
        leftWayTitle
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/mianShow.less';
.right_show_index_wrap {
    width: 100%;
    height: 100vh;
    border-left: @mainBorder; 
}
</style>

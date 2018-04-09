<template>
  <div class="navbar_wrap">
      <van-nav-bar
        :title="styleAndTextObj.title"
        :left-text="styleAndTextObj.leftText"
        :right-text="styleAndTextObj.rightText"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

import { mapState } from 'vuex';
Vue.use(NavBar);
export default {
  name: 'navBarComponent',
  data() {
    return {
      styleAndTextObj: {}
    }
  },
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState(['phonePageComponentList'])
  },
  created() {
    this.styleAndTextObj = this.phonePageComponentList[this.index].styleAndTextObj;
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>

<style lang="less" scoped>
.navbar_wrap {
    margin: 1px;
    background-color: teal;
}
</style>

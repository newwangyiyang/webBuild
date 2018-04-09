<template>
  <div class="search_wrap">
      <van-search placeholder="请输入名称" v-model="value" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style lang="less" scoped>
.search_wrap {
    width: 100%;
    div {
        padding: 0;
        div {
            padding: 2px 3px;
        }
    }
}
</style>

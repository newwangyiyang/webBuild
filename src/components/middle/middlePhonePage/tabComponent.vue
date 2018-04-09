<template>
  <div class="tab_component_wrap">
      <van-tabs :active="active">
            <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
                内容 {{ index }}
            </van-tab>
        </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
export default {
    name: 'TabComponent',
    data() {
        return {
            active: 0
        }
    }
}
</script>

<style lang="less" scoped>

</style>

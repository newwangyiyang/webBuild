<template>
  <div class="card_component_wrap">
      <van-card
        title="标题"
        desc="描述"
        num="2"
        price="2.00"
        :thumb="imageURL"
        />
  </div>
</template>

<script>
import Vue from 'vue';
import { Card } from 'vant';

Vue.use(Card);
export default {
    name: 'CardComponent',
    data() {
        return {
            imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
        }
    }
}
</script>

<style lang="less" scoped>
.card_component_wrap {

}
</style>

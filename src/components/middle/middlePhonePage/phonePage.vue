<template>
  <div class="phone_page_wrap">
      <component :index="index" class="list_item" v-for="(item, index) in componentsList" :key="item.id" :is="item.name" v-dragging="{ item: item, list: componentsList, group: 'components' }"/>
  </div>
</template>

<script>
import searchComponent from './searchComponent';
import navBarComponent from './navBarComponent';
import noticeBarComponent from './noticeBarComponent';
import panelComponent from './panelComponent';
import tabComponent from './tabComponent';
import cardComponent from './cardComponent';
import fieldComponent from './fieldComponent';

import Vue from 'vue';
import VueDND from 'awe-dnd';

Vue.use(VueDND);
export default {
    name: 'PhonePage',
    data() {
        return {
            componentsList: this.list
        }
    },
    components: {
        searchComponent,
        navBarComponent,
        noticeBarComponent,
        panelComponent,
        tabComponent,
        cardComponent,
        fieldComponent
    },
    props: ['list'],
    created() {
        // console.log(this.componentsList);
    }
}
</script>

<style lang="less" scoped>
.phone_page_wrap {
    height: 63vh;
    width: 50%;
    background-color: #f0f0f0;
    overflow: auto;
    border-radius: 5px; 
    padding: 2px 1px;
    .list_item {
        margin-bottom: 4px;
    }
}
</style>

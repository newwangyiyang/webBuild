<template>
    <div class="middle_index_wrap">
        <div class="top_box">
            <components-item @click.native="addComponent(item.component, item.componentName, item.editName)" v-for="item in componentsAllData"  :key="item.id" :itemdata="item" />
        </div>
        <div class="bottom_box">
            <phone-page :list="phonePageComponentList" />
        </div>
    </div>
</template>

<script>
import componentsItem from './middleTopComponents/componentsItem';
import phonePage from './middlePhonePage/phonePage';
import {mapState} from 'vuex';

export default {
    name: 'middleIndex',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['componentsAllData', 'phonePageComponentList', 'leftNameList', 'rightShowObj'])
    },
    components: {
        componentsItem,
        phonePage
    },
    methods: {
        addComponent(component, componentName, editName) {
            let id = Math.random().toString(36).substring(2);
            this.phonePageComponentList.push(
                {
                    name: component,
                    id: id,
                    editComponentName: editName,
                    styleAndTextObj: {
                        title: '标题', 
                        'leftText': '返回',
                        'rightText': '按钮',
                        fixed: true
                    }
                }
            );
            this.leftNameList.push(
                {
                    componentsName: componentName,
                    id: id
                }
            );
            this.rightShowObj.activeIndex = this.phonePageComponentList.length - 1;
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/mianShow.less';
.middle_index_wrap {
    width: 100%;
    height: 100vh;
    .top_box {
        height: 21vh;
        width: 100%;
        background-color: #576574;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: calc(@mainPadding -2px);
        flex-wrap: wrap; 
    }
    .bottom_box {
        height: 79vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>

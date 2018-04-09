import Vue from 'vue';
import Vuex from 'vuex';

import notie from 'notie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //右侧显示的组件编辑器
    rightShowObj: {
      activeIndex: 0
    },
    //封存的所有组件
    componentsAllData: [{
        componentName: '导航栏',
        component: 'navBarComponent',
        editName: 'navBarEdit',
        id: Math.random().toString(36).substring(2),
      },
      {
        componentName: '搜索栏',
        component: 'searchComponent',
        id: Math.random().toString(36).substring(2)
      },
      {
        componentName: '通告栏',
        component: 'noticeBarComponent',
        id: Math.random().toString(36).substring(2)
      },
      {
        componentName: 'panel面板',
        component: 'panelComponent',
        id: Math.random().toString(36).substring(2)
      },
      {
        componentName: 'tab栏',
        component: 'tabComponent',
        id: Math.random().toString(36).substring(2)
      },
      {
        componentName: 'Card 卡片',
        component: 'cardComponent',
        id: Math.random().toString(36).substring(2)
      },
      {
        componentName: 'Field 输入框',
        component: 'fieldComponent',
        id: Math.random().toString(36).substring(2)
      }
    ],
    //传递给phonePage的组件
    phonePageComponentList: [],
    //左边的操作步骤
    leftNameList: []
  },
  getters: {
    getEditObj(state) {
      return state.phonePageComponentList[state.rightShowObj.activeIndex]
    }
  },
  mutations: {
    deleItem(state, {
      index,
      id
    }) {
      console.log(index, id);
      notie.confirm({
        text: '确认删除该组件吗？',
        cancelCallback: function () {

        },
        submitCallback: function () { //确认按钮
          notie.alert({
            type: 'success',
            text: `已成功删除${state.leftNameList[index].componentsName}`,
            time: 2
          });
          state.leftNameList.splice(index, 1);
          state.phonePageComponentList.forEach((v, i) => {
            if (v.id === id) {
              state.phonePageComponentList.splice(i, 1);
            }
          });
        }
      })
    }
  },
  actions: {}
});

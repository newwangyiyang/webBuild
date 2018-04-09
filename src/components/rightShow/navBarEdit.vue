<template>
  <div class="nav_bar_edit_wrap">
      <ul class="input_box">
          <li>
              <span>标题：</span>
              <el-input v-model="getEditObj.styleAndTextObj.title" placeholder="请输入内容"></el-input>
          </li>
          <li>
              <span>左侧文本：</span>
              <el-input v-model="getEditObj.styleAndTextObj.leftText" placeholder="请输入内容"></el-input>
          </li>
          <li>
              <span>右侧文本：</span>
              <el-input v-model="getEditObj.styleAndTextObj.rightText" placeholder="请输入内容"></el-input>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'navBarEdit',
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['getEditObj'])
    },
    created() {

    }
}
</script>

<style scoped lang="less">
.nav_bar_edit_wrap {
    .input_box {
        li {
            display: flex;
            margin: 5px;
            align-items: center;
            >span {
                width: 60px;
                font-size: 8px;
            }
        }
    }
}
</style>

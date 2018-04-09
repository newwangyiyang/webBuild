<template>
  <div class="field_component_wrap">
      <van-cell-group>
        <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field, Cell, CellGroup  } from 'vant';

Vue.use(Field).use(Cell).use(CellGroup);
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    }
}
</script>

<style>

</style>

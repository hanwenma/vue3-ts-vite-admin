<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue';
import { get } from '@/utils/request';

onMounted(async () => {
  const data = await get('/getList');
  console.log('onMounted >>>>>', data);
});
</script>

<template>
  <router-link to="/home">HOME</router-link>
  <router-link to="/about">ABOUT</router-link>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  text-align: center;

  a {
    margin: 10px;
  }
}
</style>

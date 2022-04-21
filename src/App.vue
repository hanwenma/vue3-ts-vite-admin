<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue';

onMounted(async () => {
  console.log('App onMounted ...', import.meta.env.VITE_API_ENV);
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

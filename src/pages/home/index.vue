<script setup lang="ts">
import mainStore from '@/store';

const store = mainStore();
const msg = 'Home Page';
const add = () => {
  store.$patch({
    count: store.count + 1,
  });
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="add">count++</button>
  <h2>count：{{ store.count }}</h2>
  <h2>doubleCount：{{ store.doubleCount }}</h2>
</template>

<style scoped>
h1 {
  color: rgb(225, 89, 21);
}
</style>

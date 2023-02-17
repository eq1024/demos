<template>
  <div @click="zz">点击这里</div>
</template>

<script setup lang="ts">
import { getData } from '../api/http';
function zz() {
  getData().then(
    (res:any) => {
      console.log(res);
    },
    (rej:any) => {
      console.log(rej);
    }
  );
}
</script>

<style scoped></style>

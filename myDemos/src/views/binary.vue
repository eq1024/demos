<template>
  <div @click="testMock">发送mock请求</div>
  <div @click="download">下载文件</div>
</template>

<script setup lang="ts">
import { getData, getFile } from '../api/http';
function testMock() { 
  getData().then(
    (res: any) => {
      console.log(res);
    },
    (rej: any) => {
      console.log(rej);
    }
  );
}
function download() {
  getFile().then((res) => {
    let blob = new Blob([res.data], {
      type: 'image/jpeg',
    });
    let url = window.URL.createObjectURL(blob);
    let ele = document.createElement('a');
    ele.style.display = 'none';
    ele.href = url;
    ele.download = 'file';
    document.querySelectorAll('body')[0].appendChild(ele);
    ele.click();
    ele.remove();
  });
}
</script>

<style scoped></style>

<script setup>
import { inject, ref, reactive, onMounted } from 'vue';
let clienMsg = ref('')
const msgArr = reactive([])
const socket = inject("socket")
function send() {
  console.log(clienMsg.value == '');
  clienMsg.value == '' ? null : (socket.emit('cSend', clienMsg.value), clienMsg.value = '')
}

socket.on("connect", () => {
  console.log('成功', socket.id);
})

socket.on('all', data => {
  console.log("data", data);
  msgArr.push(data)
})
socket.on('sSend', data => {
  console.log("data", data);
  msgArr.push(data)
})

let ws = new WebSocket("ws://127.0.0.1:3333");
ws.onopen = function (evt) {
  console.log("Connection open ...");
  ws.send("Hello WebSockets!");
};

</script>

<template>
  <div v-for="i in msgArr" key="i">
    <p>{{ i }}</p>
  </div>
  <input type="text" v-model="clienMsg">
  <button @click="send">发送</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

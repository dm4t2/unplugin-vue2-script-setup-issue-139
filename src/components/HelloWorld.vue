<script setup>
defineProps({ msg: String })
const visible = $ref(true)
</script>

<template>
  <div class="hello">
    <h1 v-if="visible">{{ msg }}</h1>
    <button @click="visible = !visible">Toggle</button>
  </div>
</template>

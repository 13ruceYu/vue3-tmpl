<script setup lang="ts">
  // TypeScript enabled
  import { ref } from 'vue'

  const count = ref(1)
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  <h1>about</h1>
  <router-link to="/">Home</router-link>
</template>

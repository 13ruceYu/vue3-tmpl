<script setup lang="ts">
  // TypeScript enabled
  import { ref } from 'vue'

  const str = ref('Lazy')
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  {{ str }}
</template>

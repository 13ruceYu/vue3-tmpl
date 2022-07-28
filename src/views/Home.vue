<script lang="ts">
  import { defineComponent } from 'vue'
  import { useUserStore } from '@/store/user/user'

  export default defineComponent({
    setup() {
      const user = useUserStore()

      return {
        user
      }
    }
  })
</script>

<template>
  <div class="text-center">
    <h2 class="c-pink">yo, {{ user.username }}</h2>
  </div>
  <p text-center c-cyan>
    <em text-sm opacity-50>use unocss</em><br />
    <a-button type="primary">ant design button</a-button>
  </p>
</template>

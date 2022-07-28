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
  <div class="text-center" mb-1 mt-10>
    <div class="c-orange text-sm">hola, {{ user.username }}</div>
  </div>
  <div text-center>
    <a-button type="primary">ant design button</a-button><br />
  </div>
  <div class="flex text-xl items-center justify-center">
    <div class="mr-1 text-2xl italic c-pink-3"> h </div>
    <div i-carbon:cloudy class="c-blue-5"></div>
    <div i-carbon:palm-tree class="c-green-6"></div>
    <div i-carbon:palm-tree class="c-green-6"></div>
    <div i-carbon:sun class="c-yellow inline-block"></div>
  </div>
  <div text-center>
    <em class="text-sm">powered by unocss</em>
  </div>
</template>

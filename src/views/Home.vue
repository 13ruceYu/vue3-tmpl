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
  <!-- type checking and auto-completion enabled -->
  <h1>Home</h1>
  <div class="wrap">
    <h2>{{ user.username }}</h2>
  </div>
  <a-button type="primary">Primary Button</a-button>
</template>

<style lang="less" scoped>
  .wrap {
    h2 {
      background-color: tomato;
    }
  }
</style>

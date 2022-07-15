<!-- <script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
</script> -->

<script lang="ts">
import { defineComponent } from 'vue'
import TheWelcome from "@/components/TheWelcome.vue";

interface Book {
  title: string
  author: string
  year: number
  test: string
}

export default defineComponent({
  data() {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020,
        test: '123'
      } as Book
    }
  }
})
</script>
<template>
  <main>
    <div>
      {{ book }}
    </div>
    <TheWelcome />
  </main>
</template>

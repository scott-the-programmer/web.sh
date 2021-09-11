<template>
  <h1 class="text-center text-blog-text text-5xl pb-9">
    {{ heading }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>

<template>
  <div class="pb-16 lg:pb-0 mt:5">
    <div class="xl:flex xl:mx-auto">
      <div class="h-40 w-40 m-auto xl:m-1 block mb-6 lg:mb-0">
        <img
          class="max-h-full max-w-full m-auto w-full h-full rounded-md"
          :src="imageSvg"
        />
      </div>
      <p
        class="
          px-7
          lg:w-2/6
          m-auto
          xl:my-auto
          text-sm text-blog-text
          lg:text-xl
          text-center
          xl:text-left
          pb-6
          lg:pb-0
        "
      >
        {{ date }}
      </p>
      <p
        class="
          px-7
          lg:w-3/6
          m-auto
          xl:my-auto
          text-blog-text text-lg
          lg:text-xl
          text-center
          xl:text-left
        "
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    imageSvg: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>

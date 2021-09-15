<template>
  <div class="py-8">
    <div v-if="!inverse" class="xl:flex xl:mx-auto justify-center">
      <div class="h-20 w-20 m-auto xl:m-1 block relative pb-28">
        <img :class="imageCss" :src="imageSvg" />
      </div>
      <p
        class="
          px-7
          w-2/3
          m-auto
          xl:my-auto
          text-blog-text text-xl
          sm:text-center
          xl:text-left
        "
      >
        {{ description }}
      </p>
    </div>

    <div v-if="inverse" class="xl:flex xl:mx-auto justify-center">
      <p
        class="
          px-7
          w-2/3
          m-auto
          xl:my-auto
          text-blog-text text-xl
          sm:text-center
          xl:text-left
        "
      >
        {{ description }}
      </p>
      <div class="h-20 w-20 m-auto xl:m-1 block relative pb-28">
        <img :class="imageCss" :src="imageSvg" />
      </div>
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
    description: {
      type: String,
      required: true,
    },
    round: {
      type: Boolean,
      required: false,
    },
    inverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    let imageCss =
      'max-h-full max-w-full w-auto h-auto absolute top-0 bottom-0 left-0 right-0';
    if (props.round) imageCss += ' rounded-full';
    return { imageCss };
  },
});
</script>

<style></style>

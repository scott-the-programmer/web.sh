<template>
  <div class="py-8">
    <div class="flex mx-auto justify-center">
      <div class="h-20 w-1/5 text-center m-1 block relative">
        <img :class="imageCss" :src="imageSvg" />
      </div>
      <p class="px-7 w-2/3 my-auto text-blog-text text-xl">
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
    description: {
      type: String,
      required: true,
    },
    round: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    let imageCss =
      'max-h-full max-w-full w-auto h-auto absolute top-0 bottom-0 left-0 right-0 m-auto';

    if (props.round) imageCss += ' rounded-full';
    return { imageCss };
  },
});
</script>

<style></style>

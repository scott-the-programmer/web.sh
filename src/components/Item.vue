<template>
  <div class="py-10">
    <div v-if="!inverse" class="xl:flex xl:mx-auto justify-center">
      <div
        class="
          image-container
          h-20
          w-20
          ml-auto
          mr-auto
          mt-auto
          xl:m-1
          block
          relative
        "
      >
        <img :class="imageCss" :src="imageSvg" />
      </div>
      <p
        class="
          px-7
          lg:w-2/3
          m-auto
          xl:my-auto
          text-blog-text text-xl text-center
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
          lg:w-2/3
          m-auto
          xl:my-auto
          text-blog-text text-xl text-center
          xl:text-left
        "
      >
        {{ description }}
      </p>
      <div
        class="
          image-container
          h-20
          w-20
          ml-auto
          mr-auto
          mt-auto
          xl:m-1
          block
          relative
        "
      >
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
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    inverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    let imageCss =
      'max-h-full max-w-full m-auto w-full h-full absolute top-0 bottom-0 left-0 right-0';
    if (props.round) imageCss += ' rounded-full';
    if (props.rounded) imageCss += ' rounded-md';
    return { imageCss };
  },
});
</script>

<style>
.image-container {
  margin-bottom: 3rem;
}
@media only screen and (min-width: 1024px) {
  .image-container {
    margin-bottom: auto;
  }
}
</style>

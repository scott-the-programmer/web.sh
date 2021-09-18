<template>
  <div id="home" class="hero-bg w-screen">
    <div
      class="cloud cloud0"
      :style="{
        backgroundImage: 'url(' + require('@/assets/waves/0.svg') + ')',
      }"
    ></div>
    <div
      class="cloud cloud1"
      :style="{
        backgroundImage: 'url(' + require('@/assets/waves/1.svg') + ')',
      }"
    ></div>
    <div
      class="cloud cloud2"
      :style="{
        backgroundImage: 'url(' + require('@/assets/waves/2.svg') + ')',
      }"
    ></div>
    <div
      class="cloud cloud3"
      :style="{
        backgroundImage: 'url(' + require('@/assets/waves/3.svg') + ')',
      }"
    ></div>
    <div
      class="cloud cloud4"
      :style="{
        backgroundImage: 'url(' + require('@/assets/waves/4.svg') + ')',
      }"
    ></div>
    <div
      class="cloud cloud5"
      :style="{
        backgroundImage: 'url(' + require('@/assets/waves/5.svg') + ')',
      }"
    ></div>
    <div class="absolute bg-svg-last overflow-divider"></div>
    <div class="z-10 relative">
      <h1
        class="
          text-center text-nav-bar-yellow text-5xl
          pt-20
          lg:pt-40 lg:text-7xl
        "
      >
        Scott Murray
      </h1>
      <h2 class="text-center text-nav-bar-yellow text-2xl pt-2">
        I do cloud stuff!
      </h2>

      <div>
        <div
          class="
            content-center
            w-3/5
            m-auto
            justify-start
            pt-4
            lg:pt-12
            text-blog-text
          "
        >
          <p class="py-3 lg:text-lg text-center">
            <b>Welcome to my website!</b>
          </p>
          <p class="m-auto text-justify lg:text-lg lg:w-1/2">
            Experienced <del>bug</del> <b><em>clean code</em></b> typer who
            resides in Auckland, New Zealand. Actively purchasing video games
            that I will never play.
          </p>
          <p class="pt-5 m-auto text-justify lg:text-lg lg:w-1/2">
            <b>I'm mainly involved in ☁️ cloud and deploying code 🚀 </b>
          </p>
          <social></social>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Social from '@/components/Social.vue';

export default defineComponent({
  components: { Social },
});
</script>

<style lang="postcss" scoped>
.hero-bg {
  z-index: -2;
  background: linear-gradient(#142f6e 30%, #c0d8f7 30%);
  background-repeat: no-repeat;
  background-size: contain;
  border-image-width: 0px !important;
}

@media only screen and (min-width: 500px) {
  .hero-bg {
    background: linear-gradient(#142f6e 50%, #c0d8f7 40%);
  }
}

@media only screen and (min-width: 640px) {
  .hero-bg {
    height: 650px;
  }
}

.cloud {
  z-index: 1;
  position: absolute;
  background-repeat: repeat-x;
  background-size: contain;
  width: 100vw;
  height: 500px;
  transform: rotateZ(360deg); /* Browser trickery */
}

.cloud0 {
  animation: left 60s linear infinite;
}

.cloud1 {
  animation: right 30s linear infinite;
}

.cloud2 {
  animation: left 30s linear infinite;
}

.cloud3 {
  animation: right 40s linear infinite;
}

.cloud4 {
  animation: left 40s linear infinite;
}

.cloud5 {
  animation: right 80s linear infinite;
}

@keyframes left {
  from {
    background-position: 0px 0;
  }
  to {
    background-position: -100vw 0;
  }
}

@keyframes right {
  from {
    background-position: 0px 0;
  }
  to {
    background-position: 100vw 0;
  }
}
</style>

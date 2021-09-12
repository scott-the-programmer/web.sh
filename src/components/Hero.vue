<template>
  <section class="hero-bg">
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
            w-5/12
            m-auto
            justify-start
            pt-10
            lg:pt-12
            text-blog-text
          "
        >
          <p class="py-3 lg:text-lg text-center">Welcome to my website!</p>
          <p class="m-auto text-justify lg:text-lg w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            ex quis purus vestibulum fringilla ut sit amet lorem. Quisq.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.hero-bg {
  z-index: -2;
  background-color: #142f6e;
  background: linear-gradient(#142f6e 50%, #c0d8f7 50%);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 45vh;
}

@media only screen and (min-width: 640px) {
  .hero-bg {
    height: 60vh;
  }
}

.cloud {
  z-index: 1;
  position: absolute;
  background-repeat: repeat-x;
  background-size: contain;
  width: 100vw;
  height: 60vh;
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

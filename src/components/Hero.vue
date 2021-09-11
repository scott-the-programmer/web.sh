<template>
  <section class="hero-bg">
    <div>
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
      <div class="z-10 relative">
        <h1 class="text-center text-nav-bar-yellow text-7xl pt-40">
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
              pt-12
              text-nav-bar-yellow
            "
          >
            <p class="py-3">Welcome to my website!</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.hero-bg {
  z-index: -1;
  background-color: #142f6e;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 600px;
}

.cloud {
  z-index: 1;
  position: absolute;
  background-repeat: repeat-x;
  background-size: contain;
  width: 120vw;
  height: 60vh;
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

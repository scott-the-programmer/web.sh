<template>
  <section class="bg-svg-last w-screen z-10 absolute -mt-1">
    <div class="m-auto xl:w-1/2">
      <cloud></cloud>
      <web></web>
      <programming></programming>
      <journey></journey>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cloud from '@/components/Cloud.vue';
import Web from '@/components/Web.vue';
import Journey from '@/components/Journey.vue';
import Programming from '@/components/Programming.vue';

export default defineComponent({
  components: { Cloud, Web, Programming, Journey },
});
</script>

<style scoped></style>

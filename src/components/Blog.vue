<template>
  <section class="bg-svg-last w-screen z-10 absolute -mt-1">
    <div class="m-auto xl:w-1/2">
      <cloud></cloud>
      <web></web>
      <dumb-projects></dumb-projects>
      <resume></resume>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cloud from '@/components/Cloud.vue';
import DumbProjects from '@/components/Projects.vue';
import Web from '@/components/Web.vue';
import Resume from '@/components/Resume.vue';

export default defineComponent({
  components: { Cloud, Web, DumbProjects, Resume },
});
</script>

<style scoped></style>

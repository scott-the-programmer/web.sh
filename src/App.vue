<template>
  <div>
    <profile-navigation></profile-navigation>
    <hero></hero>
    <cloud></cloud>
    <web></web>
    <dumb-projects></dumb-projects>
    <resume></resume>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileNavigation from '@/components/ProfileNavigation.vue';
import Hero from '@/components/Hero.vue';
import Cloud from '@/components/Cloud.vue';
import DumbProjects from '@/components/Projects.vue';
import Web from '@/components/Web.vue';
import Resume from '@/components/Resume.vue';

export default defineComponent({
  components: { ProfileNavigation, Hero, Cloud, Web, DumbProjects, Resume },
  name: 'App',
});
</script>

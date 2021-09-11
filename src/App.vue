<template>
  <div>
    <profile-navigation></profile-navigation>
    <hero></hero>
    <blog></blog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileNavigation from '@/components/ProfileNavigation.vue';
import Hero from '@/components/Hero.vue';
import Blog from '@/components/Blog.vue';

export default defineComponent({
  components: { ProfileNavigation, Hero, Blog },
  name: 'App',
});
</script>

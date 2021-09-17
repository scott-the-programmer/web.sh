<template>
  <section id="journey" class="pt-10">
    <menu-header heading="My Journey"></menu-header>
    <journey-item
      :imageSvg="require('@/assets/icons/zip.jpg')"
      date="Zip 2019 - present"
      description="A wild ride at Zip! Currently changing the game at a fast-paced, high performing, fintech company"
    ></journey-item>
    <journey-item
      :imageSvg="require('@/assets/icons/iqvia.jpg')"
      date="IQVIA 2016 - 2019"
      description=".NET based role solving CRM problems with a large emphasis on data partitioning and synchronizing"
    ></journey-item>
    <journey-item
      :imageSvg="require('@/assets/icons/dxc.jpg')"
      date="DXC Technology 2015"
      description="Working with local NZ businesses to create bespoke integrations with Dynamics AX"
    ></journey-item>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuHeader from '@/components/MenuHeader.vue';
import JourneyItem from '@/components/JourneyItem.vue';

export default defineComponent({
  components: { MenuHeader, JourneyItem },
});
</script>

<style scoped></style>

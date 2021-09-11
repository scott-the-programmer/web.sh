<template>
  <section class="p-10">
    <menu-header heading="Web"></menu-header>
    <item
      :imageSvg="require('@/assets/icons/react.png')"
      :round="true"
      description="Preferred web framework when it comes to building
      complex reactive front-ends"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/vue.png')"
      description="For personal use when I want something light-weight!"
    ></item>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuHeader from '@/components/MenuHeader.vue';
import Item from '@/components/Item.vue';

export default defineComponent({
  components: { MenuHeader, Item },
});
</script>

<style scoped></style>

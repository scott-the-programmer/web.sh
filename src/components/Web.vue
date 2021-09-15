<template>
  <section class="p-5">
    <menu-header heading="Web"></menu-header>
    <item
      :imageSvg="require('@/assets/icons/react.png')"
      :round="true"
      :inverse="shouldInverse"
      description="Preferred web framework when it comes to building
      complex reactive front-ends"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/vue.png')"
      :inverse="shouldInverse"
      description="For personal use when I want something light-weight!"
    ></item>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import MenuHeader from '@/components/MenuHeader.vue';
import Item from '@/components/Item.vue';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwindConfig = require('@/../tailwind.config');
export default defineComponent({
  components: { MenuHeader, Item },
  setup() {
    const fullConfig = resolveConfig(tailwindConfig);
    const xlBreakpoint = fullConfig.theme.screens.xl.replace('px', '');
    const shouldInverse = ref(!(window.innerWidth < xlBreakpoint));

    const adjustItem = () => {
      shouldInverse.value = !(window.innerWidth < xlBreakpoint);
    };

    onMounted(() => {
      window.addEventListener('resize', adjustItem);
    });

    return { shouldInverse };
  },
});
</script>

<style scoped></style>

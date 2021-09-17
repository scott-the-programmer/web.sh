<template>
  <section id="programming" class="pt-10">
    <menu-header heading="Programming"></menu-header>
    <item
      :imageSvg="require('@/assets/icons/net.png')"
      :rounded="true"
      description=".NET dev through-in-through. Last couple of years
      being solely focussed on .NET Core"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/ts.png')"
      :rounded="true"
      description="What's not to love about Typescript!"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/js.png')"
      :rounded="true"
      description="Simply cannot escape Javascript! (i've tried)"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/scala-icon.png')"
      :rounded="true"
      description="Worked with Scala for a bit and now i'm convinced option types
      are the best"
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

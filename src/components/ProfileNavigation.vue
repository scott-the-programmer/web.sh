<template>
  <div class="bg-nav-bar-background w-screen overflow-hidden">
    <div class="float-right h-10 table">
      <div class="m-auto table-cell align-middle pr-5">
        <img class="h-10" :src="require('@/assets/icons/menu.svg')" />
      </div>
    </div>
    <!-- <ul class="md:hidden">
      <li>Home</li>
      <li>Cloud</li>
      <li>Web</li>
      <li>Programming</li>
      <li>Resume</li>
    </ul> -->
    <ul
      class="
        md:flex
        justify-center
        text-center
        align-middle
        w-max
        m-auto
        space-x-6
        h-10
        hidden
      "
    >
      <li
        class="m-auto text-nav-bar-yellow"
        :class="navBarElement.home"
        v-on:mouseover="onHover($event)"
        v-on:mouseleave="onHoverLeave($event)"
      >
        Home
      </li>
      <li
        class="m-auto text-nav-bar-yellow"
        :class="navBarElement.cloud"
        v-on:mouseover="onHover($event)"
        v-on:mouseleave="onHoverLeave($event)"
      >
        Cloud
      </li>
      <li
        class="m-auto text-nav-bar-yellow"
        :class="navBarElement.web"
        v-on:mouseover="onHover($event)"
        v-on:mouseleave="onHoverLeave($event)"
      >
        Web
      </li>
      <li
        class="m-auto text-nav-bar-yellow"
        :class="navBarElement.programming"
        v-on:mouseover="onHover($event)"
        v-on:mouseleave="onHoverLeave($event)"
      >
        Programming
      </li>
      <li
        class="m-auto text-nav-bar-yellow"
        :class="navBarElement.dumbprojects"
        v-on:mouseover="onHover($event)"
        v-on:mouseleave="onHoverLeave($event)"
      >
        Dumb Projects
      </li>
      <li
        class="m-auto text-nav-bar-yellow"
        :class="navBarElement.resume"
        v-on:mouseover="onHover($event)"
        v-on:mouseleave="onHoverLeave($event)"
      >
        Resume
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  setup() {
    const navBarElement: Ref<{ [k: string]: any }> = ref({});

    const onHover = (e: MouseEvent) => {
      const selectionElement = (e.currentTarget as any).innerHTML;
      navBarElement.value[getKeyFor(selectionElement)] = 'navBarHover';
    };

    const onHoverLeave = (e: MouseEvent) => {
      const selectionElement = (e.currentTarget as any).innerHTML;
      navBarElement.value[getKeyFor(selectionElement)] = '';
    };

    return { onHover, onHoverLeave, navBarElement };
  },
});

/**
 * Parses string to an identifiable key i.e.
 * "My Text" => "mytext"
 */
function getKeyFor(elementText: string): string {
  return elementText.trim().replace(/\s/g, '').toLowerCase();
}
</script>

<style lang="postcss" scoped>
.navBarHover {
  color: #73cca8;
  border-bottom-width: 4px;
  border-bottom-color: #73cca8;
}
</style>

<template>
  <div>
    <div class="bg-nav-bar-background w-screen absolute z-30">
      <div class="md:hidden float-right h-10 table z-30">
        <div
          v-on:click="expandMenu()"
          class="m-auto table-cell align-middle pr-5"
        >
          <img class="h-10" :src="require('@/assets/icons/menu.svg')" />
        </div>
      </div>

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
    <ul
      v-if="mobileNav"
      class="
        bg-nav-bar-background
        w-screen
        absolute
        z-20
        top-10
        text-lg text-center text-nav-bar-yellow
      "
      :class="mobileNavClass"
    >
      <li>Home</li>
      <li>Cloud</li>
      <li>Web</li>
      <li>Programming</li>
      <li class="pb-2">Resume</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  setup() {
    const navBarElement: Ref<{ [k: string]: any }> = ref({});
    const mobileNav: Ref<boolean> = ref(false);
    const mobileNavClass: Ref<string> = ref('hidden');

    const expandMenu = () => {
      const open = mobileNav.value;
      if (open) {
        mobileNav.value = false;
        mobileNavClass.value = '';
        console.log('closing menu');
      } else {
        mobileNav.value = true;
        mobileNavClass.value = 'slide-in';
      }
    };

    const onHover = (e: MouseEvent) => {
      const selectionElement = (e.currentTarget as any).innerHTML;
      navBarElement.value[getKeyFor(selectionElement)] = 'nav-bar-hover';
    };

    const onHoverLeave = (e: MouseEvent) => {
      const selectionElement = (e.currentTarget as any).innerHTML;
      navBarElement.value[getKeyFor(selectionElement)] = '';
    };

    return {
      onHover,
      onHoverLeave,
      navBarElement,
      expandMenu,
      mobileNavClass,
      mobileNav,
    };
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
.nav-bar-hover {
  color: #73cca8;
  border-bottom-width: 4px;
  border-bottom-color: #73cca8;
}

.slide-in {
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-name: slide-in-animation;
  background-color: #1b2a60;
}

@keyframes slide-in-animation {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

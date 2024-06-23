<template>
  <section :class="$style.root">
    <h1 :class="$style['section-title']" v-if="titleExists">
      <slot name="title"></slot>
    </h1>
    <main :class="$style['section-content']">
      <slot></slot>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileSection",

  setup(props, ctx) {
    const slots = ctx.slots;

    return {
      titleExists: slots.title !== undefined,
      subtitleExists: slots.subtitle !== undefined,
      contentExists: slots.content !== undefined,
    };
  },
});
</script>

<style lang="scss" module>
@import "../variables";

.root {
}

.section-title {
  font-family: "Montserrat", sans-serif;
  font-size: $font-xlarge;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 $space-xsmall 0;
}

.section-content {
  font-size: $font-small;
}
</style>

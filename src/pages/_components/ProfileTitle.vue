<template>
  <div :class="$style.root">
    <h1 :class="$style.name">
      <span :class="$style.firstname">{{ summary.name.first }}</span>
      <span :class="$style.lastname">{{ summary.name.last }}</span>
    </h1>
    <h2 :class="$style.position">{{ summary.position }}</h2>
    <p :class="$style.about">{{ summary.about }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Summary } from "@data";

export default defineComponent({
  name: "ProfileTitle",

  props: {
    summary: {
      type: Object as PropType<Summary>,
      required: true,
    },
  },
});
</script>

<style lang="scss" module>
@import "../variables";

.root h1,
.root h2 {
  margin: 0;
}

.name {
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.firstname {
  margin-right: $space-small;
}

.position {
  text-transform: uppercase;
}
</style>

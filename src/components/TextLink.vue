<template>
  <a :href="href" :class="class"><slot /></a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextLink",

  props: {
    href: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped>
a {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}
</style>

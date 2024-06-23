<template>
  <ProfileSection :class="$style.root">
    <template v-slot:title>Qualifications</template>
    <template v-slot:default>
      <section v-for="{ name, url } in qualifications" :key="name">
        <TextLink :href="url">
          {{ name }}
        </TextLink>
      </section>
    </template>
  </ProfileSection>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import ProfileSection from "./ProfileSection.vue";
import type { Qualification } from "@/data";
import TextLink from "@components/TextLink.vue";

export default defineComponent({
  name: "ProfileQualifications",

  props: {
    qualifications: {
      type: Object as PropType<Array<Qualification>>,
      required: true,
    },
  },

  components: { ProfileSection, TextLink },
});
</script>

<style lang="scss" module>
@import "../variables";

.root {
}
</style>

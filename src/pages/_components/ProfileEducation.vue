<template>
  <ProfileSection :class="$style.root">
    <template v-slot:title>Education</template>
    <template v-slot:default>
      <section :class="$style.content">
        <article
          v-for="{ name, degree, timeperiod, website } in education"
          :key="name"
        >
          <TextLink :href="website">
            <h2 :class="$style.degree">{{ degree }}</h2>
            <p :class="$style.name">{{ name }}</p>
            <p :class="$style.timeperiod">{{ timeperiod }}</p>
          </TextLink>
        </article>
      </section>
    </template>
  </ProfileSection>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import ProfileSection from "./ProfileSection.vue";
import type { Education } from "@/data";
import TextLink from "@components/TextLink.vue";

export default defineComponent({
  name: "ProfileEducation",

  props: {
    education: {
      type: Object as PropType<Array<Education>>,
      required: true,
    },
  },

  components: { ProfileSection, TextLink },
});
</script>

<style lang="scss" module>
@import "../variables";

.root p {
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: $space-xsmall;
}

.degree {
  text-transform: uppercase;
  font-size: $font-small;
  margin: 0;
}
</style>

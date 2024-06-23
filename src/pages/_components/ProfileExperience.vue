<template>
  <ProfileSection :class="$style.root">
    <template v-slot:title>Experience</template>
    <template v-slot:default>
      <section :class="$style.content">
        <article
          v-for="{
            position,
            company,
            timeperiod,
            website,
            description,
            activities,
          } in experience"
          :key="timeperiod"
        >
          <h2 :class="$style.position">{{ position }}</h2>
          <h3 :class="$style.company">
            <TextLink :href="website">
              {{ company }} |
              <span :class="$style.timeperiod">{{ timeperiod }}</span>
            </TextLink>
          </h3>
          <p :class="$style.description">
            {{ description }}
          </p>
          <ul :class="$style.activities">
            <li
              v-for="activity in activities"
              :key="activity"
              :class="$style.activity"
            >
              {{ activity }}
            </li>
          </ul>
        </article>
      </section>
    </template>
  </ProfileSection>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import ProfileSection from "./ProfileSection.vue";
import type { Experience } from "@/data";
import TextLink from "@components/TextLink.vue";

export default defineComponent({
  name: "ProfileEducation",

  props: {
    experience: {
      type: Object as PropType<Array<Experience>>,
      required: true,
    },
  },

  components: { ProfileSection, TextLink },
});
</script>

<style lang="scss" module>
@import "../variables";

.root h2,
.root h3,
.root p {
  margin: 0;
}

.root h2 {
  text-transform: uppercase;
  font-size: $font-medium;
}

.root h3 {
  // margin: $space-xsmall 0;
  font-size: $font-medium;
}

.root ul {
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: $space-small;
}

.company {
  color: $accent-color;
}
</style>

<template>
  <ProfileSection :class="$style.root">
    <template v-slot:title>Skills</template>
    <template v-slot:default>
      <section :class="$style.content">
        <article v-for="{ description, contents } in skills" :key="description">
          <h2 :class="$style.description">{{ description }}</h2>
          <ul>
            <li v-for="{ name, experience } in contents" :key="name">
              <span :class="$style.experience" v-if="experience"
                >({{ experience }})</span
              >
              {{ name }}
            </li>
          </ul>
        </article>
      </section>
    </template>
  </ProfileSection>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProfileSection from "./ProfileSection.vue";
import type { Skill } from "@/data";

export default defineComponent({
  name: "ProfileSkills",

  props: {
    skills: {
      type: Object as PropType<Array<Skill>>,
      required: true,
    },
  },

  components: { ProfileSection },
});
</script>

<style lang="scss" module>
@import "../variables";

.root ul {
  margin: 0;
  list-style: none;
}

.content {
  display: flex;
  flex-direction: column;
  gap: $space-medium;
}

.description {
  text-transform: uppercase;
  font-size: $font-small;
  margin: 0;
}

.experience {
  margin-right: $space-xxsmall;
}
</style>

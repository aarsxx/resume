<template>
  <ProfileSection :class="$style.root">
    <ul :class="$style.list">
      <!-- Email -->
      <li>
        <TextLink :href="contactLinks.email" :class="$style.item">
          <span>{{ contact.email }}</span><i class="far fa-envelope fa-fw fa-lg" />
        </TextLink>
      </li>

      <!-- City, Country -->
      <li :class="$style.item">
        <span>{{ contact.city }}, {{ contact.country }}</span><i class="fas fa-home fa-fw fa-lg" />
      </li>

      <!-- GitHub -->
      <li>
        <TextLink :href="contactLinks.github" target="_blank" :class="$style.item">
          <span>github.com/{{ contact.github }}</span><i class="fab fa-github fa-fw fa-lg" />
        </TextLink>
      </li>
    </ul>
  </ProfileSection>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";
import ProfileSection from "./ProfileSection.vue";
import TextLink from "@components/TextLink.vue";
import type { Contact } from "@/data";

export default defineComponent({
  name: "ProfileContact",

  props: {
    contact: {
      type: Object as PropType<Contact>,
      required: true,
    },
  },

  components: { ProfileSection, TextLink },

  setup(props) {
    const contactLinks = computed(() => {
      const github = `https://github.com/${props.contact.github}`;

      const email = `mailto:${props.contact.email}`;

      return { github, email };
    });

    return { contactLinks };
  },
});
</script>

<style lang="scss" module>
@import "../variables";

.root ul {
  margin: 0;
  list-style: none;
}

.list {
  display: flex;
  flex-direction: column;
  gap: $space-small;

  .item {
    display: flex;
    // This means that align right.
    justify-content: flex-end;
    align-items: center;
    gap: $space-xsmall;
  }
}
</style>

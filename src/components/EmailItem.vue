<template>
  <div
    class="email-item"
    :class="[email.read && 'email-item--read']"
    @click="$emit('open')"
  >
    <input
      type="checkbox"
      name="email-item"
      id="email-item"
      class="input-check"
      @change="(event) => $emit('update', event.target.checked)"
      :checked="selected"
    />

    <p class="email-item__title">{{ email.title }}</p>
  </div>
</template>

<script>
export default {
  name: "EmailItem",

  props: {
    email: {
      type: Object,
      default: () => ({}),
    },

    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.email-item {
  display: flex;
  gap: 0 20px;
  padding: 20px;
  border-radius: 6px;
  background: rgb(247, 245, 245);
  transition: background ease-in-out 0.3s;
  cursor: pointer;
}

.email-item--read {
  opacity: 0.5;
}

.email-item:hover {
  background: rgb(231, 231, 231);
}

.email-item__title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #000;
}
</style>

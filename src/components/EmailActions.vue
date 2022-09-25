<template>
  <div class="email-action" :class="[padded && 'email-action--padded']">
    <input
      type="checkbox"
      name="check-email"
      id="check-email"
      class="input-check"
      v-if="showCheck"
      @change="(event) => $emit('update', event.target.checked)"
    />

    <button
      v-for="btn in actions"
      :key="btn.action"
      class="btn btn--action"
      :disabled="disabled"
      @click="$emit(btn.action)"
    >
      {{ btn.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "EmailActionWrapper",

  props: {
    showCheck: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    padded: {
      type: Boolean,
      default: false,
    },

    actions: {
      type: Array,
      default: () => [
        {
          name: "Mark as read (r)",
          action: "markAsRead",
        },

        {
          name: "Archive (a)",
          action: "archive",
        },
      ],
    },
  },
};
</script>

<style scoped>
.email-action {
  display: flex;
  align-items: center;
  gap: 0 20px;
}

.email-action--padded {
  padding-left: 20px;
}

.btn--action {
  border: 1.2px solid rgb(212, 211, 211);
  padding: 6px 15px;
  min-width: 130px;
  background: rgb(247, 245, 245);
  transition: background ease-in-out 0.25s;
}

.btn--action:hover {
  background: rgb(231, 231, 231);
}

.btn--action:disabled {
  background: rgb(225, 222, 222);
  cursor: default;
}
</style>

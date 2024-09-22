<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <!-- Thêm padding cho container và giới hạn chiều rộng -->
    <div
      class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 relative"
    >
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Optional styles for modal */
</style>

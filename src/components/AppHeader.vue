<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold">Cơm Văn Phòng</div>
        <div class="relative">
          <!-- Dropdown Toggle -->
          <button
            @click="toggleDropdown"
            class="text-gray-700 hover:text-gray-900 px-4 py-2 bg-gray-200 rounded-md"
          >
            Menu
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
          >
            <ul>
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >Trang Chủ</a
                >
              </li>
              <li>
                <a
                  href="/menu"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >Quản Lý Menu</a
                >
              </li>
              <li>
                <a
                  @click="openLogin"
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >Đăng Nhập</a
                >
              </li>
              <li>
                <a
                  @click="openRegister"
                  href="#"
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >Đăng Ký</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    openLogin() {
      console.log("Login event emitted"); // Log sự kiện để kiểm tra
      this.$emit("openLogin");
    },
    openRegister() {
      this.$emit("openRegister");
    },
  },
};
</script>

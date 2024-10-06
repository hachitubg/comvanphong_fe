<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <!-- Logo và Tên thương hiệu, link về trang chủ -->
        <a href="/" class="flex items-center">
          <img
            src="https://comvanphongonline.com/wp-content/uploads/2019/11/logo-com-01.png"
            alt="Logo"
            class="w-10 h-10 mr-3"
          />
          <div class="text-xl font-bold">Cơm Văn Phòng</div>
        </a>

        <!-- Kiểm tra trạng thái đăng nhập -->
        <div class="relative">
          <div v-if="!isLoggedIn" class="flex space-x-4">
            <!-- Hiển thị nếu chưa đăng nhập -->
            <button
              @click="openLogin"
              class="text-gray-700 hover:text-gray-900 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              Đăng Nhập
            </button>
            <button
              @click="openRegister"
              class="text-gray-700 hover:text-gray-900 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              Đăng Ký
            </button>
          </div>

          <!-- Hiển thị nếu đã đăng nhập -->
          <div v-else class="flex items-center">
            <!-- Avatar và tên người dùng -->
            <img
              :src="user.avatar"
              alt="avatar"
              class="w-10 h-10 rounded-full object-cover mr-3"
            />
            <button
              @click="toggleDropdown"
              class="text-gray-700 hover:text-gray-900 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition flex items-center"
            >
              {{ user.name }}
              <svg
                class="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="isDropdownOpen"
              class="absolute top-full right-0 mt-1 w-60 bg-white rounded-md shadow-lg z-50"
            >
              <ul class="py-1">
                <li>
                  <a
                    href="/"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition"
                    >Trang chủ</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition"
                    >Thông Tin Người Dùng</a
                  >
                </li>
                <li>
                  <a
                    @click="logout"
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition"
                    >Đăng Xuất</a
                  >
                </li>
                <!-- Hiển thị chức năng admin nếu có quyền ADMIN -->
                <li v-if="user.role === 'ADMIN'">
                  <div class="border-t my-2"></div>
                  <a
                    href="/menu"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition"
                    >Quản Lý Menu</a
                  >
                </li>
              </ul>
            </div>
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
      isLoggedIn: true, // trạng thái đăng nhập
      isDropdownOpen: false, // trạng thái của dropdown
      user: {
        name: "Admin",
        avatar: "https://via.placeholder.com/40", // link hình ảnh avatar
        role: "ADMIN", // hoặc USER
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    openLogin() {
      this.$emit("openLogin");
    },
    openRegister() {
      this.$emit("openRegister");
    },
    logout() {
      console.log("Đăng xuất");
      this.isLoggedIn = false; // Đặt trạng thái về chưa đăng nhập
      this.isDropdownOpen = false;
    },
  },
};
</script>

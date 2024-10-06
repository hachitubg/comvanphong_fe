<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Quản lý menu -->
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold text-center mb-8">Quản Lý Menu</h1>

      <!-- Hiển thị khi không có menu -->
      <div v-if="menus.length === 0" class="text-center">
        <p class="text-lg text-gray-700 mb-4">Hiện tại chưa có menu nào.</p>
        <button
          @click="openMenuModal"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Thêm Menu Mới
        </button>
      </div>

      <!-- Hiển thị danh sách menu -->
      <div v-else>
        <div class="text-right mb-4">
          <button
            @click="openMenuModal"
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Thêm Menu Mới
          </button>
        </div>

        <div class="overflow-x-auto">
          <table
            class="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg"
          >
            <thead>
              <tr class="bg-gray-100">
                <th class="px-4 py-2 border text-left">Tên Menu</th>
                <th class="px-4 py-2 border text-left">Chi Tiết</th>
                <th class="px-4 py-2 border text-left">Giá</th>
                <th class="px-4 py-2 border text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in menus" :key="item.id" class="hover:bg-gray-50">
                <td class="px-4 py-2 border">{{ item.nameMenu }}</td>
                <td class="px-4 py-2 border">{{ item.detail }}</td>
                <td class="px-4 py-2 border">{{ item.price }} đ</td>
                <td class="px-4 py-2 border text-center">
                  <button
                    @click="editMenu(item)"
                    class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Sửa
                  </button>
                  <button
                    @click="confirmDeleteMenu(item.id)"
                    class="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Popup thêm/sửa menu -->
      <Modal :isVisible="showMenuModal" @close="closeMenuModal">
        <h2 class="text-2xl mb-4">
          {{ editingMenu ? "Chỉnh Sửa Menu" : "Thêm Menu Mới" }}
        </h2>
        <form @submit.prevent="saveMenu">
          <div class="mb-4">
            <label for="nameMenu" class="block mb-2">Tên Menu</label>
            <input
              v-model="menu.nameMenu"
              id="nameMenu"
              class="w-full p-2 border rounded"
              placeholder="Nhập tên menu"
            />
          </div>
          <div class="mb-4">
            <label for="detail" class="block mb-2">Chi Tiết</label>
            <input
              v-model="menu.detail"
              id="detail"
              class="w-full p-2 border rounded"
              placeholder="Nhập chi tiết menu"
            />
          </div>
          <div class="mb-4">
            <label for="price" class="block mb-2">Giá</label>
            <input
              v-model="menu.price"
              id="price"
              type="number"
              class="w-full p-2 border rounded"
              placeholder="Nhập giá"
            />
          </div>
          <button
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {{ editingMenu ? "Cập Nhật" : "Thêm" }}
          </button>
          <button
            type="button"
            @click="closeMenuModal"
            class="ml-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Hủy
          </button>
        </form>
      </Modal>

      <!-- Popup xác nhận xóa menu -->
      <Modal :isVisible="showDeleteModal" @close="closeDeleteModal">
        <h2 class="text-2xl mb-4">Xác Nhận Xóa Menu</h2>
        <p>Bạn có chắc chắn muốn xóa menu này?</p>
        <div class="mt-4 text-right">
          <button
            @click="deleteMenu"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Xóa
          </button>
          <button
            @click="closeDeleteModal"
            class="ml-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Hủy
          </button>
        </div>
      </Modal>
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue"; // Import header
import AppFooter from "./AppFooter.vue"; // Import footer
import Modal from "./ModalSection.vue"; // Sử dụng Modal.vue hiện tại

export default {
  components: {
    AppHeader,
    AppFooter,
    Modal,
  },
  data() {
    return {
      // Dữ liệu mẫu thay vì call API
      menus: [
        {
          id: 1,
          nameMenu: "Cơm Gà Xối Mỡ",
          detail: "Ngon, giòn, bổ dưỡng",
          price: 45000,
        },
        {
          id: 2,
          nameMenu: "Cơm Tấm Sườn",
          detail: "Đậm đà, thơm ngon",
          price: 50000,
        },
        {
          id: 3,
          nameMenu: "Cơm Chiên Dương Châu",
          detail: "Đặc sản, bắt mắt",
          price: 40000,
        },
      ],
      menu: {
        id: null,
        nameMenu: "",
        detail: "",
        price: "",
      },
      editingMenu: false, // Trạng thái chỉnh sửa menu
      showMenuModal: false, // Trạng thái hiển thị modal thêm/sửa
      showDeleteModal: false, // Trạng thái hiển thị modal xóa
      deleteMenuId: null, // ID của menu sẽ bị xóa
    };
  },
  methods: {
    openMenuModal() {
      this.resetForm();
      this.showMenuModal = true;
    },
    closeMenuModal() {
      this.showMenuModal = false;
    },
    saveMenu() {
      if (this.editingMenu) {
        // Update existing menu
        const index = this.menus.findIndex((m) => m.id === this.menu.id);
        this.menus.splice(index, 1, { ...this.menu });
      } else {
        // Add new menu
        const newId = this.menus.length
          ? this.menus[this.menus.length - 1].id + 1
          : 1;
        this.menus.push({ ...this.menu, id: newId });
      }
      this.closeMenuModal();
    },
    editMenu(item) {
      this.menu = { ...item };
      this.editingMenu = true;
      this.showMenuModal = true;
    },
    confirmDeleteMenu(id) {
      this.deleteMenuId = id;
      this.showDeleteModal = true;
    },
    deleteMenu() {
      this.menus = this.menus.filter((menu) => menu.id !== this.deleteMenuId);
      this.closeDeleteModal();
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
      this.deleteMenuId = null;
    },
    resetForm() {
      this.menu = {
        id: null,
        nameMenu: "",
        detail: "",
        price: "",
      };
      this.editingMenu = false;
    },
  },
};
</script>

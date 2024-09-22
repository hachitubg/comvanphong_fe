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

        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="px-4 py-2 border">Tên Menu</th>
              <th class="px-4 py-2 border">Chi Tiết</th>
              <th class="px-4 py-2 border">Giá</th>
              <th class="px-4 py-2 border">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in menus" :key="item.id">
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
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppFooter,
    Modal,
  },
  data() {
    return {
      menus: [],
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
    async fetchMenus() {
      try {
        const response = await axios.get("/api/menus");
        this.menus = response.data;
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    },
    openMenuModal() {
      this.resetForm();
      this.showMenuModal = true;
    },
    closeMenuModal() {
      this.showMenuModal = false;
    },
    async saveMenu() {
      if (this.editingMenu) {
        try {
          await axios.put(`/api/menus/${this.menu.id}`, this.menu);
          this.fetchMenus();
          this.closeMenuModal();
        } catch (error) {
          console.error("Error updating menu:", error);
        }
      } else {
        try {
          await axios.post("/api/menus", this.menu);
          this.fetchMenus();
          this.closeMenuModal();
        } catch (error) {
          console.error("Error adding menu:", error);
        }
      }
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
    async deleteMenu() {
      try {
        await axios.delete(`/api/menus/${this.deleteMenuId}`);
        this.fetchMenus();
        this.closeDeleteModal();
      } catch (error) {
        console.error("Error deleting menu:", error);
      }
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
  created() {
    this.fetchMenus();
  },
};
</script>

<style scoped>
/* Custom styles cho trang quản lý menu */
table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

table th {
  background-color: #f3f4f6;
  font-weight: bold;
}
</style>

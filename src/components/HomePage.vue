<template>
  <div>
    <!-- Lắng nghe sự kiện từ Header -->
    <Header @openLogin="openLoginModal" @openRegister="openRegisterModal" />
    <Hero />
    <FeaturedMenu />
    <Footer />

    <!-- Popup đăng nhập -->
    <Modal :isVisible="showLoginModal" @close="closeLoginModal">
      <Login />
    </Modal>

    <!-- Popup đăng ký -->
    <Modal :isVisible="showRegisterModal" @close="closeRegisterModal">
      <Register />
    </Modal>
  </div>
</template>

<script>
import Header from "./AppHeader.vue";
import Hero from "./HeroSection.vue";
import FeaturedMenu from "./FeaturedMenu.vue";
import Footer from "./AppFooter.vue";
import Modal from "./ModalSection.vue"; // Sử dụng modal hiện tại
import Login from "./LoginPage.vue"; // Component đăng nhập
import Register from "./RegisterPage.vue"; // Component đăng ký

export default {
  name: "HomePage",
  components: {
    Header,
    Hero,
    FeaturedMenu,
    Footer,
    Modal,
    Login,
    Register,
  },
  data() {
    return {
      showLoginModal: false, // Trạng thái hiển thị popup đăng nhập
      showRegisterModal: false, // Trạng thái hiển thị popup đăng ký
    };
  },
  methods: {
    // Mở popup đăng nhập
    openLoginModal() {
      this.showLoginModal = true;
    },
    // Đóng popup đăng nhập
    closeLoginModal() {
      this.showLoginModal = false;
    },
    // Mở popup đăng ký
    openRegisterModal() {
      this.showRegisterModal = true;
    },
    // Đóng popup đăng ký
    closeRegisterModal() {
      this.showRegisterModal = false;
    },
  },
};
</script>

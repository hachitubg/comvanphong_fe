<template>
  <div class="login-form mx-auto max-w-md py-8">
    <h2 class="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
    <form @submit.prevent="submitLogin">
      <div class="mb-4">
        <label for="email" class="block mb-2">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full p-2 border rounded"
          placeholder="Nhập email"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2">Mật Khẩu</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="w-full p-2 border rounded"
          placeholder="Nhập mật khẩu"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Đăng Nhập
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      // Xử lý đăng nhập
      console.log(`Email: ${this.email}, Password: ${this.password}`);
    },
  },
};
</script>

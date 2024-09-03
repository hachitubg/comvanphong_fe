<template>
  <div class="login-container">
    <h1>Đăng Nhập</h1>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="phoneNumber">Số điện thoại</label>
        <input v-model="phoneNumber" id="phoneNumber" type="text" required />
      </div>
      <div class="input-group">
        <label for="password">Mật khẩu</label>
        <input v-model="password" id="password" type="password" required />
      </div>
      <button type="submit">Đăng Nhập</button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      phoneNumber: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$http.post("/api/auth/login", {
          phoneNumber: this.phoneNumber,
          password: this.password,
        });
        alert(response.data); // Thông báo khi đăng nhập thành công
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.errorMessage = "Thông tin đăng nhập không chính xác.";
        } else {
          this.errorMessage = "Đã xảy ra lỗi. Vui lòng thử lại.";
        }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 15px;
  font-size: 14px;
}
</style>

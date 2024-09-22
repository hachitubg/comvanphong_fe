<template>
  <div class="register-form mx-auto max-w-md py-8">
    <h2 class="text-2xl font-bold text-center mb-6">Đăng Ký</h2>
    <form @submit.prevent="submitRegister">
      <div class="mb-4">
        <label for="fullName" class="block mb-2">Họ và Tên</label>
        <input
          v-model="fullName"
          type="text"
          id="fullName"
          class="w-full p-2 border rounded"
          placeholder="Nhập họ và tên"
        />
      </div>
      <div class="mb-4">
        <label for="officeAddress" class="block mb-2">Địa Chỉ Văn Phòng</label>
        <input
          v-model="officeAddress"
          type="text"
          id="officeAddress"
          class="w-full p-2 border rounded"
          placeholder="Nhập địa chỉ"
        />
      </div>
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
        <label for="phoneNumber" class="block mb-2">Số Điện Thoại</label>
        <input
          v-model="phoneNumber"
          type="text"
          id="phoneNumber"
          class="w-full p-2 border rounded"
          placeholder="Nhập số điện thoại"
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
      <div class="mb-4">
        <label for="building" class="block mb-2"
          >Tòa Nhà (Không bắt buộc)</label
        >
        <input
          v-model="building"
          type="text"
          id="building"
          class="w-full p-2 border rounded"
          placeholder="Nhập tòa nhà (nếu có)"
        />
      </div>
      <div class="mb-4">
        <label for="floors" class="block mb-2">Tầng (Không bắt buộc)</label>
        <input
          v-model="floors"
          type="text"
          id="floors"
          class="w-full p-2 border rounded"
          placeholder="Nhập tầng (nếu có)"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Đăng Ký
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      fullName: "",
      officeAddress: "",
      email: "",
      phoneNumber: "",
      password: "",
      building: "",
      floors: "",
    };
  },
  methods: {
    submitRegister() {
      // Xử lý đăng ký
      console.log({
        fullName: this.fullName,
        officeAddress: this.officeAddress,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        building: this.building,
        floors: this.floors,
      });
    },
  },
};
</script>

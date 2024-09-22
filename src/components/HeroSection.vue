<template>
  <section class="hero bg-gray-200 py-16">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold">Chào mừng đến với Cơm Văn Phòng</h1>
      <p class="mt-4 text-lg text-gray-700">
        Chúng tôi cung cấp những bữa ăn chất lượng, giao hàng nhanh chóng đến
        văn phòng của bạn!
      </p>
      <a
        href="#"
        class="mt-6 inline-block bg-green-500 text-white px-8 py-2 rounded-lg hover:bg-green-600"
        >Khám phá Menu</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  background-image: url("https://source.unsplash.com/random/1200x400?lunch");
  background-size: cover;
  background-position: center;
}
</style>

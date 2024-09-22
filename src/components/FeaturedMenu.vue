<template>
  <section class="featured-menu py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center">Các Món Ăn Nổi Bật</h2>
      <div
        class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="dish in featuredDishes"
          :key="dish.id"
          class="bg-white shadow-md rounded-lg overflow-hidden mx-auto w-full max-w-sm"
        >
          <img
            :src="dish.image"
            class="w-full h-48 object-cover"
            :alt="dish.name"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ dish.name }}</h3>
            <p class="text-gray-700 mt-2">{{ dish.description }}</p>
            <div class="mt-4 text-green-500 font-bold">{{ dish.price }} đ</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedMenu",
  data() {
    return {
      featuredDishes: [
        {
          id: 1,
          name: "Cơm Gà Xối Mỡ",
          description: "Cơm gà giòn tan với nước sốt đặc biệt.",
          price: "50,000",
          image: "https://source.unsplash.com/random/400x300?chicken-rice",
        },
        {
          id: 2,
          name: "Cơm Sườn Nướng",
          description: "Cơm sườn nướng thơm ngon hấp dẫn.",
          price: "60,000",
          image: "https://source.unsplash.com/random/400x300?grilled-pork",
        },
        // Thêm các món ăn khác...
      ],
    };
  },
};
</script>

<style scoped>
.featured-menu {
  background-color: #f3f4f6;
}

.container {
  max-width: 1200px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.w-full {
  width: 100%;
}

.max-w-sm {
  max-width: 24rem; /* Card sẽ không quá lớn trên màn hình lớn */
}
</style>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from '@/stores/ProductStore';
import { useCartStore } from '@/stores/CartStore';
const productStore = useProductStore();
const cartStore = useCartStore();

// cartStore.$onAction(({name, store, args, after, onError})=>{
//   if (name === "addToCart"){
//     after(()=>{
//       // console.log(name);
//       // console.log(store);
//       // console.log(args);
//     });
//     onError((error) => {
//       // console.log("Hello error: ", error.message);
//     })
//   }
// });

productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="mb-5 flex justify-end">
      <AppButton @click="cartStore.undo">Undo</AppButton>
      <AppButton class="ml-2" @click="cartStore.redo">Redo</AppButton>
    </div>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard 
        v-for="product in productStore.products" 
        :key="product.name" 
        :product="product" 
        @addToCart="cartStore.addToCart($event, product)"
      />
    </ul>
  </div>
</template>

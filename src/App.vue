<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from '@/stores/ProductStore';
import { useCardStore } from '@/stores/CardStore';
const productStore = useProductStore();
const cardStore = useCardStore();
productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard 
        v-for="product in productStore.products" 
        :key="product.name" 
        :product="product" 
        @addToCart="cardStore.addToCart($event, product)"
      />
    </ul>
  </div>
</template>

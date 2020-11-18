<template>
  <div class="product">
    <div class="product__info">
      <p>{{ title }}</p>
      <p class="product__price">
        <small>$</small>
        <strong>{{ price }}</strong>
      </p>
      <div class="product__rating">
        <p v-for="(i, index) in rating" :key="index">⭐</p>
      </div>
    </div>
    <img :src="image" alt=""/>
    <button @click.prevent="addToBasket">Add to Basket</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import {Product} from "@/interfaces/interfaces";

export default defineComponent({
  name: "Product",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
  },
  setup(props, {root}) {
    function addToBasket(): void {
      const item: Product = {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating
      }
      root.$store.dispatch('addToBasket', item)
      console.log(item)
    }

    return {
      addToBasket
    }
  }
});
</script>
<style>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
}

.product > img {
  max-height: 200px;
  width: 100px;
  object-fit: contain;
  margin-bottom: 15px;
}

.product > button {
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
}

.product__price {
  margin-top: 5px;
}

.product__info {
  height: 100px;
  margin-bottom: 15px;
}

.product__rating {
  display: flex;
}
</style>

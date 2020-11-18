<template>
  <div class="checkoutProduct">
    <img class="checkoutProduct__image" :src="image" alt="">
    <div class="checkoutProduct__info">
      <p class="checkoutProduct__title">{{ title }}</p>
      <p class="checkoutProduct__price">
        <small>$</small>
        <strong>{{ price }}
        </strong>
      </p>
      <div class="checkoutProduct__rating">
        <p v-for="(_, index) in rating" :key="index">🌟</p>
      </div>
      <button @click="removeFromBasket">Remove from Basket</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "CheckoutProduct",
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
    }
  },
  setup(props, {root}) {
    const removeFromBasket = () => {
      root.$store.dispatch("removeFromBasket", {
        id: props.id
      })
    }
    return {
      removeFromBasket
    }
  }
})
</script>

<style scoped>
.checkoutProduct {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}

.checkoutProduct__info {
  padding-left: 20px;
}

.checkoutProduct__info > button {
  background: orange;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111111;
}

.checkoutProduct__image {
  object-fit: contain;
  width: 180px;
  height: 180px;
}

.checkoutProduct__rating {
  display: flex;
}

.checkoutProduct__title {
  font-size: 17px;
  font-weight: 800;
}
</style>
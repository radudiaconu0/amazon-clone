<template>
  <div class="checkout">
    <div class="checkout__left">
      <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          class="checkout__ad"
      />
      <div>
        <h3>Hello, {{ user == null ? 'Guest' : user.email }}</h3>
        <h2 class="checkout__title">Your shopping Basket, Dude</h2>
        <div v-for="product in basket" :key="product.id">
          <CheckoutProduct :id="product.id" :image="product.image" :title="product.title" :rating="product.rating"
                           :price="product.price"></CheckoutProduct>
        </div>
      </div>
    </div>
    <div>
      <h2 class="checkout__right">
        <Subtotal/>
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "@vue/composition-api";
import Subtotal from "../components/Subtotal.vue";
import CheckoutProduct from "@/components/CheckoutProduct.vue";

export default defineComponent({
  name: "Checkout",
  components: {Subtotal, CheckoutProduct},
  setup(_, {root}) {
    const basket = computed(() => root.$store.getters.basket);
    const user = computed(() => root.$store.getters.user)
    return {
      basket,
      user
    }
  }
});
</script>
<style>
.checkout {
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
}

.checkout__ad {
  width: 100%;
  margin-bottom: 10px;
}

.checkout__title {
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
}
</style>

<template>
  <div class="payment">
    <div class="payment__container">
      <h1>
        Checkout
        (
        <router-link to="/checkout">{{ basket.length }} items</router-link>
        )
      </h1>
      <div class="payment__section">
        <div class="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div class="payment__address">
          <p>{{ user.email }}</p>
          <p>123 Vue Lane</p>
          <p>Ramnicu Valcea, ROU</p>
        </div>
      </div>
      <div class="payment__section">
        <div class="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div class="payment__items">
          <div v-for="(item, index) in basket" :key="index">
            <CheckoutProduct :id="item.id"
                             :title="item.title"
                             :image="item.image"
                             :price="item.price"
                             :rating="item.rating">
            </CheckoutProduct>
          </div>
        </div>
      </div>
      <div class="payment__section">
        <div class="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div class="payment__details">

        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "@vue/composition-api";
import {Product} from "@/interfaces/interfaces.ts";
import CheckoutProduct from "@/components/CheckoutProduct.vue";

export default defineComponent({
  name: "Payment",
  components: {CheckoutProduct},
  setup(_, {root}) {
    const basket = computed((): Array<Product> => root.$store.getters.basket)
    const user = computed(() => root.$store.getters.user)
    return {
      basket,
      user
    }
  }
})
</script>

<style scoped>
.payment {
  background-color: white;
}

.payment__container {
  text-align: center;
  padding: 10px;
  font-weight: 400;
  background-color: rgb(234, 237, 237);
  border-bottom: 1px solid lightgrey;
}

.payment__container > h1 a {
  text-decoration: none;
}

.payment__section {
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
}

.payment__title {
  flex: 0.2;
}

.payment__address .payment__items {
  flex: 0.8;
}
</style>
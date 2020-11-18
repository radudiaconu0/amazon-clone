<template>
  <div class="subtotal">
    <p>
      Subtotal ({{ basket.length }}) items:
      <MoneyFormat :value="basketTotal" currency-code="USD">
      </MoneyFormat>
    </p>
    <small class="subtotal__gift">
      <input type="checkbox"/> This order contains a gift
    </small>
    <button>Proceed to checkout</button>
  </div>
</template>
<script lang="ts">
import {Product} from '@/interfaces/interfaces';
import {computed, ComputedRef, defineComponent} from "@vue/composition-api";
import MoneyFormat from "vue-money-format";

export default defineComponent({
  name: "Subtotal",
  components: {MoneyFormat},
  setup(_, {root}) {
    const basket: ComputedRef<Array<Product>> = computed(() => root.$store.getters.basket)
    const basketTotal: ComputedRef<Number> = computed(() => root.$store.getters.basketTotal)
    return {
      basket,
      basketTotal
    }
  }
});
</script>
<style>
.subtotal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
}

.subtotal__gift {
  display: flex;
  align-items: center;
}

.subtotal > button {
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
}
</style>
<template>
  <div class="header">
    <router-link to="/">
      <img
          to="/"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          class="header__logo"
      />
    </router-link>
    <div class="header__search">
      <input type="text" class="header__searchInput"/>
      <font-awesome-icon class="header__searchIcon" icon="search"></font-awesome-icon>
    </div>
    <div class="header__nav">
      <router-link :to="!user ? '/login': '/'">
        <div @click="handleAuthentication" class="header__option">
          <span class="header__optionLineOne">{{ user ? "Hello " + user.email : "Hello Guest" }}</span>
          <span class="header__optionLineTwo">{{ user ? "Sign out" : "Sign In" }}</span>
        </div>
      </router-link>
      <div class="header__option">
        <span class="header__optionLineOne">Returns</span>
        <span class="header__optionLineTwo">& Orders</span>
      </div>
      <div class="header__option">
        <span class="header__optionLineOne">Your</span>
        <span class="header__optionLineTwo">Prime</span>
      </div>
      <router-link to="/checkout">
        <div class="header__optionBasket">
          <font-awesome-icon icon="shopping-basket"></font-awesome-icon>
          <div class="header__basketCount header__optionLineTwo">{{ basket.length }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "@vue/composition-api";
import {auth} from "@/firebase";

export default defineComponent({
  name: "Header",
  setup(_, {root}) {
    const basket = computed(() => root.$store.getters.basket)
    const user = computed(() => root.$store.getters.user)
    const handleAuthentication = async () => {
      if (user) {
        await auth.signOut();
      }
    }
    return {
      basket,
      user,
      handleAuthentication
    }
  }
});
</script>
<style>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__logo {
  width: 100px;
  object-fit: contain;
  margin: 18px 20px 0;
}

.header__searchIcon {
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
}

.header__search {
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
}

.header__searchInput {
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
}

.header__optionLineOne {
  font-size: 10px;
}

.header__optionLineTwo {
  font-size: 13px;
  font-weight: 800;
}

.header__optionBasket {
  display: flex;
  align-items: center;
  color: white;
}

.header__basketCount {
  margin-left: 10px;
  margin-right: 10px;
}

.header__nav {
  display: flex;
  justify-content: space-evenly;
}

.header__option {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
}
</style>

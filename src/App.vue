<template>
  <div class="app">
    <Header v-if="$route.path !=='/login'"/>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import {defineComponent, watchEffect} from "@vue/composition-api";
import Header from "./components/Header.vue";
import {auth} from "@/firebase";

export default defineComponent({
  components: {Header},
  setup(_, {root}) {
    watchEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log("The user is >>>> ", authUser);
        if (authUser) {
          root.$store.dispatch('setUser', {
            user: authUser
          })
        } else {
          root.$store.dispatch('setUser', {
            user: null
          })
        }
      })
    })
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

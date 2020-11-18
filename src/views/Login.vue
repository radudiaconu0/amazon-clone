<template>
  <div class="login">
    <router-link to="/">
      <img class="login__logo" src="../assets/Amazon_logo.png" alt="">
    </router-link>
    <div class="login__container">
      <h1>Sign-in</h1>
      <form @submit.prevent="signIn">
        <h5>E-mail</h5>
        <input v-model="formData.email" type="email"/>
        <h5>Password</h5>
        <input v-model="formData.password" type="password"/>
        <button type="submit" class="login__signInButton">Sign In</button>
      </form>
      <p>
        By signing-in you agree to Amazon CLONE FAKE Conditions of Use & Sale.
        Please see our Privacy Notice, our Cookies Notice
        and our Interest Based Ads
      </p>
      <button @click.prevent="register" class="login__registerButton">Create your Amazon account</button>
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive} from "@vue/composition-api";
import {auth} from "@/firebase.ts";

export default defineComponent({
  name: "Login",
  setup(_, {root}) {
    const formData = reactive({
      email: '',
      password: ''
    })
    const signIn = async () => {
      try {
        let authData = await auth.signInWithEmailAndPassword(formData.email, formData.password)
        console.log(authData)
        root.$router.push('/')
      } catch (e) {
        console.log('Eroare', e.message)
      }
    }
    const register = async () => {
      try {
        const authData = await auth.createUserWithEmailAndPassword(formData.email, formData.password)
        console.log("auth", authData);
        if (authData) {
          root.$router.push('/');
        }
      } catch (e) {
        console.log("Error", e.message)
      }
    }
    return {
      formData,
      signIn,
      register
    }
  }
})
</script>

<style scoped>
.login {
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login__logo {
  object-fit: contain;
  width: 100px;
  margin: 20px auto;
}

.login__container {
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
}

.login__container > h1 {
  font-weight: 500;
  margin-bottom: 20px;
}

.login__container > form > h5 {
  margin-bottom: 5px;
}

.login__container > form > input {
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 90%;
}

.login__container > p {
  margin-top: 15px;
  font-size: 12px;
}

.login__signInButton {
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
}

.login__registerButton {
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  color: darkgray;
}
</style>
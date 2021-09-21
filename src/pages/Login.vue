<template>
  <q-page class="flex column flex-center">
    <q-card class="my-card">

      <img src="~assets/logo-sysall.png">
      <q-card-section class="flex column ">
        <q-input outlined v-model="name" label="Email:">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input label="Senha:" class="q-mt-sm" outlined v-model="password" :type="isPwd ? 'password' : 'text'">
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"/>
        </template>
        </q-input>
        <q-btn class="btn-login" label="Acessar" @click="$router.push({name:'home'})"  />
        <p class="text-center q-mt-sm" @click="$router.push({name:'reloadPassword'})">Esqueci minha senha</p>
      </q-card-section>

    </q-card>

  </q-page>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    return {
      name: ref(''),
      password: ref(''),
      isPwd: ref(true)
    }
  }

})

</script>

<style  scoped>
  .my-card{
    width: 100%;
    max-width: 350px;
  }
  .my-card img {
    padding: 15px 45px;
  }
  .btn-login{
    color: #ffffff;
    background-color: #006884;
    box-shadow: 5px;
    margin-top: 6px;
  }
  p {
    text-align: center;
    cursor: pointer;
    color: #006884;
    font-weight: bold;
    transition: transform 1s;
  }
  p:hover{
    transform: scale(1.08);
  }
</style>

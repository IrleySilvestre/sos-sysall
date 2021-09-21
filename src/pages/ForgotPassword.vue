<template>
  <q-page class="flex column flex-center">
    <q-card class="my-card">
      <p class="text-center text-h4 q-mt-md">Recuperar Senha</p>
      <q-card-section class="flex column ">
        <q-input outlined v-model="email" label="Email:">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-btn class="btn-recovery" label="Recuperar" @click="$router.push({name:'login'})" />
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
      email: ref('')
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
  .btn-recovery{
    color: #ffffff;
    background-color: #006884;
    box-shadow: 5px;
    margin-top: 30px;
  }
  p {
    cursor: pointer;
    color: #006884;
    font-weight: bold;
  }
</style>

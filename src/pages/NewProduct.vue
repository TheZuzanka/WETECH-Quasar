<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <label>Názov produktu:</label>
      <q-input filled v-model="name" />
      <label>Popisný názov produktu:</label>
      <q-input filled v-model="extended_name" />
      <label>Popis:</label>
      <q-input filled v-model="description" type="textarea"/>
      <label>Cena:</label>
      <q-input filled v-mode.number="price" type="number"/>
      <label>Popis:</label>
      <q-input filled v-model="description" type="textarea"/>
      <label>Profilový obrázok:</label>
      <q-input filled v-model="profile_picture" type="url" placeholder="https//:"/>
      <label>Počet  kusov na sklade:</label>
      <q-input filled v-mode.number="availible" type="textarea"/>
      <label>Odroda:</label>
      <q-input filled v-model="type" />
      <label>Farba:</label>
      <q-input filled v-model="color" />
      <label>Chuť:</label>
      <q-input filled v-model="taste" />
      <label>Pestovanie:</label>
      <q-input filled v-model="farming_type" />
      <label>Veľkosť:</label>
      <q-input filled v-model="size" />
      <label>Pestovateľ:</label>
      <q-input filled v-model="producer" />
      <label>Kategória:</label>
      <q-input filled v-model="category" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      ph: '',

      dense: false
    }
  }
}
</script>

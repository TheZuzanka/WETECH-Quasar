<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Administratíva
        </q-toolbar-title>
        <q-btn round color="primary" icon="home" @click="$router.replace('/')"/>
        <q-btn round color="primary" icon="add" @click="$router.replace('/addNewProduct')"/>
        <q-btn round color="primary" icon="search" />
        <q-btn round color="primary" icon="cancel" />
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
export default {
  methods: {
    addNewProduct () {
      console.log('hovno')
    }
  }
}
</script>

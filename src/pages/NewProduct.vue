<template>
  <q-page class="flex flex-center">
    <q-list highlight>
      <q-list-header>Users list Nico som zmenila hovno</q-list-header>
      <q-item v-for="user in users" v-bind:key="user.id">
        <q-item-main>
          <div class="container-fluid cart-item-container d-flex justify-content-center">
            <div class="row cart-item col-10">
              <div class="col-4 d-flex justify-content-end align-items-center">
                <div class="row d-flex justify-content-end align-items-center">
                  <div class="col-12">
                    <img class="cart-item-img" :src="user.profile_picture">
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <h1>{{user.name}}</h1>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <p>{{user.description}}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <div class="col-12">
                      <h2>{{user.price}}€</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <q-btn round color="primary" icon="edit" />
                <q-btn round color="primary" icon="delete" />
              </div>
            </div>
          </div>
        </q-item-main>
      </q-item>
    </q-list>
  </q-page>
</template>

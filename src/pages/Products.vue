<template>
  <q-page class="flex flex-center">
    <q-list highlight>
      <q-list-header>Users list</q-list-header>
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

<script>
import axios from 'axios'

export default {
  // name: 'PageName',
  data: function () {
    return {
      users: []
    }
  },
  created () {
    axios.get('http://localhost:8888/api/products1')
      .then(response => {
        this.users = response.data
        console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>

.cart-menu-item a, .cart-menu-item-selected a, .cart-menu-item-disabled a{
  color: #D5D5D5;
}

.cart-menu-item a:hover, .cart-menu-item-selected a:hover{
  color: #ffffff;
  text-decoration: none;
}

.cart-menu-item-disabled a:hover{
  cursor: not-allowed;
  color: #D5D5D5;
  text-decoration: none;
}

.cart-item{
  max-width: 1000px;
}

.cart-item-container{
  background-color: #A5A99E;
  margin-bottom: 10px;
  margin-top: 10px;
}

.cart-item-img{
  width: 80%;
}

.cart-item h1{
  font-size: 30px;
  padding: 0;
  margin-top: 10px;
}

.cart-item h2{
  font-size: 20px;
  padding: 0;
}

.cart-item p{
  font-size: 15px;
  padding: 0;
}

.cart-item a{
  color: #222222;
}

.cart-item input{
  background-color: #BEC2B8;
}

.cart-item input:focus{
  background-color: #BEC2B8;
}

.delivery-selection p{
  margin: 0;
}

.delivery-selection label{
  margin: 0;
}

.delivery-item input{
  margin-right: 10px;
}

.delivery-item label{
  font-size: 20px;
}

</style>

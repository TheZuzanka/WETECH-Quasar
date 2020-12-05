<template>
  <q-page class="flex flex-center">
    <div class="container-fluid cart-item-container d-flex justify-content-center">
      <div class="row cart-item">
        <div class="col-4 d-flex justify-content-end align-items-center">
          <div class="row d-flex justify-content-end align-items-center">
            <div class="col-3">
            </div>
            <div class="col-9">
              <img class="cart-item-img" src="https://i.postimg.cc/kXTSV0xK/logo-text.png">
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <h1>Meno Produktu</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <form>
                <div class="form-group">
                  <label for="quantity1">Počet kusov</label>
                  <input type="number" min="0" class="form-control w-25" id="quantity1" name="quantity">
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h2>Cena €</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ products[0] }}
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.$axios
      .get('http://localhost:8888/api/products1')
      .then(res => {
        console.log('res', res)
        this.products = res.data
      })
      .catch(err => {
        console.log('err', err)
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
  width: inherit;
  max-width: 120px;
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

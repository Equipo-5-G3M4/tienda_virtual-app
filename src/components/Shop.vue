<template>
  <div id="shop">
      <div class="wrapper">
          <section class="card-products">
            <div class="grid">
                <div v-for="product in products" v-bind:key="product.productoname">
                  <Card :name="product.productoname" :value="product.precio" :category="product.categoria" :image="product.imagen"/>
                </div> 
             </div>
          </section>
      </div>        
  </div>
</template>
<script>

import axios from 'axios';
import Card from './card_product.vue';


export default {
  name: 'Shop',
  components: {
    Card
  },
  data: function (){
          return {
              products : []
          }
  },
  Create: function() {
    let self = this;
    axios.get("http://localhost:8000/productos")
        .then(result => {self.products = result.data})      
        .catch(error => {
            alert("error en el servidor", error);
    })
  }   
}
</script>

<style>
.wrapper {
  padding: 0 30px;
}
.grid {
  display: grid;
  row-gap: 30px;
}
.card-products{
  padding: 3em 0;
}
@media screen and (min-width: 480px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
  .wrapper {
    max-width: 1440px;
    margin: auto;
  }
}
@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 25px;
  }
  .wrapper {
    max-width: 1440px;
    margin: auto;
  }
}
@media screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
  }
  .wrapper {
    max-width: 1440px;
    margin: auto;
  }
  .card-products{
  max-height: 820px;
  overflow: scroll; 
  }
  .card-products::-webkit-scrollbar {
    display: none;
  }
}
</style>


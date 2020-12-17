<template>
  <div id="product">
      <div class="wrapper">
          <section class="back-action">
                <button v-on:click="back()">Atras</button>
          </section>
          <section class="product-details">
              <article  class="product-details__product">
                    <div class="product-details__product--picture">
                        <img v-bind:src="producto.imagen" alt="">
                    </div>
                    <div class="product__description">
                      <p class="product__description--title">{{producto.productoname}} </p>
                      <p class="product__description--price">  Precio:  <span>${{producto.precio}}</span></p>
                      <p class="product__description--category">Categoria: <span> {{producto.categoria}}</span></p>
                      <p class="product__description--description">Descripcion: <span>{{producto.descripcion}}</span></p>
                    </div>
                </article>
          </section>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Product',
  methods: {
    back: function() {
      this.$router.push({name: "root"})
    }
  },
  data: function(){
    return{
      producto : {}
    }
  },
  components: {
  
  },
  beforeCreate: function() {
    let self = this;
    axios.get("http://127.0.0.1:8000/productos/" + this.$route.params.producto)
        .then(result => {self.producto = result.data})
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
.back-action{
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;
}
.back-action button {
    padding: .8em 1em;
    cursor: pointer;
    outline: none;
    color: white;
    background-color: black;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: bold;
    box-sizing: border-box;
}
.back-action button:hover{
    color: black;
    background-color: white;
    
}
.product__description span {
    padding: .3em 0;
    display: block;
}
.product__description p {
    font-weight: bold;
}
.product__description--title{
    font-size: 1.5em;
}
.product__description--price span,
.product__description--category span,
.product__description--description span{
    font-weight: 400;
}
.product__description--description span{
    text-align: justify;
}

@media screen and (min-width: 480px) {
  
  .wrapper {
    max-width: 1440px;
    margin: auto;
  }
}
@media screen and (min-width: 768px) {
  
  .wrapper {
    max-width: 1440px;
    margin: auto;
  }
  .product-details__product{
    display: flex;
  }
  .product-details__product--picture img{
    width: 350px;
    height: 350px;
  }
  .product__description{
      margin: 0 auto;
      width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
  }
}
@media screen and (min-width: 1024px) {
  .wrapper {
    max-width: 1440px;
    margin: auto;
  }
  .product-details__product{
    display: flex;
  }
  .product-details__product--picture img{
    width: 500px;
    height: 500px;
  }
  .product__description{
      margin: 0 auto;
      width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
  }  
}
</style>

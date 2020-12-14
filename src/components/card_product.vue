<template>
  <div id="card-product">

    <article v-on:click="di(producto.productoname)" class="card">
      <div class="card__picture">
          <img v-bind:src="producto.imagen" alt="">
      </div>
      <div class="card__description">
        <p class="card__description--title">{{producto.productoname}} </p>
        <p class="card__description--price">Precio: {{producto.precio}}</p>
        <p class="card__description--category">{{producto.categoria}}</p>
      </div>

    </article>
    
  </div>
</template>

<script>

export default {
  name: 'Card',
  
  methods: {
    di: function (productoName) {
     this.$router.push({name: "productoDetails", params:{ producto: productoName }})
    }
  },
  props: {
  	producto: {
    	type: Object
    }
  },
  
  components: {
  }
}
</script>

<style>

.card {
  border-radius: 8px;
  overflow: hidden;  
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.card__picture{
  margin-bottom: .8em;
  opacity: 0.5;
}
.card:hover  .card__picture{
  opacity: 1;
}
.card__picture img {
  width: 220px;
 object-fit: cover;
}
.card__description{
  padding: 1em 0;
  /* border-top: 1px solid rgba(0, 0, 0, 0.05); */
  border-radius: 5px 5px 0 0 ;
  background-color: rgba(0, 0, 0, 0.01);
}

.card__description--title{
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: bold;
}
.card__description--price,
.card__description--category{
  font-size: .7em;
}

</style>

<template>
  <div id="card-product">

    <article v-on:click="di()" class="card">
      <div class="card__picture">
          <img :src='image' alt="">
      </div>
      <div class="card__description">
        <p class="card__description--title">{{name}} </p>
        <p class="card__description--price">Precio: {{value}}</p>
        <p v-for="cat in category" v-bind:key="cat" class="card__description--category">{{cat}}</p>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  name: 'Card',
  methods: {
    di: function() {
     this.$router.push({name: "productoDetails", params:{producto: this.name}})
    }
  },
  props: ['name', 'value', 'category', 'image']
  ,
  
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
  min-height: 360px;
  max-height: 360px;
  position: relative;
}
.card__picture{
  margin-bottom: .8em;
  opacity: 0.8;
  max-height: 220px;
  display: flex;
  justify-content: center;
}
.card:hover  .card__picture{
  opacity: 1;
}
.card__picture img {
      width: 90%;
  max-height: 220px;
 object-fit: contain;
}
.card__description{
  padding: 1em 0;
  /* border-top: 1px solid rgba(0, 0, 0, 0.05); */
  border-radius: 5px 5px 0 0 ;
  background-color: rgba(0, 0, 0, 0.01);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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

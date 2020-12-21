<template>
  <div id="productos">
    <div v-for="producto in productos" v-bind:key="producto.productoname">
      <Card :name="producto.productoname" :value="producto.precio" :category="producto.categoria" :image="producto.imagen"/>
    </div>
  </div>
</template>

<script>
import Card from "./card_product";
import axios from "axios";

export default {
  name: "Categoria",
  components: {Card},
  data: function (){
    return {
      categoria_in: this.$route.params.categoria,
      productos: []
    }
  },
  props: ['category'],
  created: function() {
    axios.get("https://tienda-virtual12.herokuapp.com/info/" + this.categoria_in)
    //axios.get("http://127.0.0.1:8000/info/" + this.categoria_in)
        .then(resultado => {this.productos = resultado.data})
        .catch(error => {
            alert("error en el servidor " + error);
      })
  }
}
</script>

<style scoped>
#productos {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
</style>

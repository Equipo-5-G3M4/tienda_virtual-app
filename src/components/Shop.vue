<template>
  <div id="shop">
      <div class="wrapper">
          <section class="card-products">
            <div class="grid">
                <div v-for="(value, index) in values" v-bind:key="index">
                  <p>{{value.productoname}}</p>
                  <p>{{value.precio}}</p>
                  <Card />
                </div>           
            
             </div>
          </section>
      </div>    
  </div>
</template>

<script>
//import axios from 'axios';
import Card from './card_product.vue';

export default {
  name: 'Shop',
  data: function (){
          return {
              values : [
                {
                "productoname": "patineta",
                "precio": 69900,
                "descripcion": "Perfecta patineta diseñada para mantener horas y horas de diversión asegurada para los niños.",
                "existencia": 5,
                "categoria": "juguetes"
            },
            {
                "productoname": "patineta2",
                "precio": 69900,
                "descripcion": "Perfecta patineta diseñada para mantener horas y horas de diversión asegurada para los niños.",
                "existencia": 5,
                "categoria": "juguetes"
            }
              ]
          }
      },
  components: {
      Card
  },
  created: function() {
          let pruebaFalsa = {
            "rueda abdominal": {
                "productoname": "rueda abdominal",
                "precio": 29900,
                "descripcion": "La rueda es ideal para trabajoabdominal completo, espalda baja y fortalecimiento de los lumbares y generando la curvatura natural de la espalda.",
                "existencia": 7,
                "categoria": "deportes y fitness"
            },
            "patineta": {
                "productoname": "patineta",
                "precio": 69900,
                "descripcion": "Perfecta patineta diseñada para mantener horas y horas de diversión asegurada para los niños.",
                "existencia": 5,
                "categoria": "juguetes"
            }
          }
            console.log(pruebaFalsa)
            var keys = Object.keys(pruebaFalsa);
            var values2 = keys.map(function(v) { return pruebaFalsa[v]; });
            console.log("arreglo",values2)

          //let self = this
         /*  axios.get("https://tienda-virtual12.herokuapp.com/productos")
              .then((result) => {
                  self.balance = result.data.balance
                  console.log(self.balance)
              })
              .catch((error) => {
                  alert("ERROR Servidor", error);
              }); */
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
</style>

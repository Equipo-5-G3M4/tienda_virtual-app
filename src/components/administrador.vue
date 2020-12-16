<template>
  <div class="container">
    <div id="administrador">
      <h1>ADMINISTRADOR</h1>
    </div>
    <div class="container-column">
      <div class="column-a">
        <form class="entradas">
          <label for="titulo">Titulo:</label><br />
          <input type="text" id="titulo" name="titulo" /><br />

          <label for="cantidad">Cantidad:</label><br />
          <input type="number" id="cantidad" name="cantidad" /><br />

          <label for="precio">Precio:</label><br />
          <input type="text" id="precio" name="precio" /><br />

          <label for="descripcion">Descripción:</label><br />
          <textarea name="descripcion" id="descripcion" cols="30" rows="10" ></textarea><br />

          <label for="imagen">Imagen:</label><br />
          <input type="text" id="imagen" name="imagen" /><br />
        </form>
      </div>
      <div class="column-b">
        <div class="productos" v-for="(producto, index) in productos" v-bind:key="index">          
            <article  class="product-details">
              <div class="product-picture">
                <img v-bind:src="producto.patineta.imagen" width="400" height="250" alt="">
              </div>
              <div class="product-description">
                <h2 class="title">{{producto.patineta.productoname}} </h2>                
                <h2 class="vary"></h2>
                <p class="price">  Precio:  <span>{{producto.patineta.precio}}</span></p>
                <p class="price">  Cantidad:  <span>{{producto.patineta.existencia}}</span></p>
                <p class="category">Categoria: <span> {{producto.patineta.categoria}}</span></p>
                <p class="description">Descripcion: <span>{{producto.patineta.descripcion}}</span></p>



                <section class="back-action">
                  <input type="text" id ="buscar"/><br />
                  <button v-on:click="capturar()">Buscar</button>                                   
                  <p class="prueba"></p>                 
                </section>
                

                
              </div>
            </article>                     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "getproducto",
  data: function () {
    return {
      productos: [],  
      cualquiera: String   
    };
  },
  created: function () {
    let self = this;
    axios.get("http://localhost:8000/productos")
        .then(response => (self.productos = response.data))        
        .catch((error) => {
            alert("ERROR Servidor");
      });
  },
  methods: {
    capturar: function(){
      this.cualquiera = document.getElementById('buscar').value;        
        /*document.querySelector('.prueba').innerHTML = text; 
        */
    }, 
    /*posible: function(posible){
      console.log(posible)     
    }   */
  },
    /*props:{
    cualquiera: String,
  },*/
};
</script>

<style>
#administrador {
  background-color: rgb(95, 105, 93);
  margin-bottom: 20px;
  display: block;
}
.entradas input {
  padding: 6px;
  border-radius: 1em;
  border: 2px solid black;
  margin: 15px 50px;
  font-size: 17px;
  width: 80%;
}
.entradas textarea {
  padding: 6px;
  border-radius: 1em;
  border: 2px solid black;
  margin: 15px 50px;
  font-size: 17px;
  width: 80%;
}
form {
  text-align: left;
}
label {
  margin: 0px 50px;
}
.container-column {
  display: flex;
  justify-content: space-evenly;
}
.column-a {
  background-color:white;
  width: 40%;
}
.column-b {
  background-color: white;
  width: 60%;
}
.productos{
  background-color:white;

      
  }
.product-details{
  text-align: left;
  background-color: white;
  margin: 10px;
      
  } 
.product-picture{
  text-align: center;
  background-color:white;
  margin: 10px;
      
  }
.product-description{
  text-align: justify;
  background-color: white;
  margin: 10px;
  }
  
  .product-description p{    
    margin: 10px;  
  }
  @media screen and (max-width: 1100px){
    .container-column{
      flex-wrap: wrap;
      
    }
    .column-a{
      margin:20px 0px 20px ;
      width: 100%;
    }
    .column-b{
      margin:20px 0px 20px ;
      width: 100%;
    }
  }


</style>

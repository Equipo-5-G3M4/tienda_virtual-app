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
          <input type="text" id="cantidad" name="cantidad" /><br />

          <label for="precio">Precio:</label><br />
          <input type="text" id="precio" name="precio" /><br />

          <label for="descripcion">Descripción:</label><br />
          <textarea
            name="descripcion"
            id="descripcion"
            cols="30"
            rows="10"
          ></textarea
          ><br />

          <label for="imagen">Imagen:</label><br />
          <input type="text" id="imagen" name="imagen" /><br />
        </form>
      </div>
      <div class="column-b">
        <div class="productos" v-for="(producto, index) in productos" v-bind:key="index">
          
            <article  class="product-details">
              <div class="product-picture">
                <img v-bind:src="producto.patineta.imagen" width="500" height="300" alt="">
              </div>
              <div class="product__description">
                <p class="title">{{producto.patineta.productoname}} </p>
                <p class="price">  Precio:  <span>{{producto.patineta.precio}}</span></p>
                <p class="category">Categoria: <span> {{producto.patineta.categoria}}</span></p>
                <p class="description">Descripcion: {{producto.patineta.descripcion}}</p>
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
  background-color: rgba(0, 255, 255, 0.158);
  width: 40%;
}
.column-b {
  background-color: rgba(233, 150, 122, 0.199);
  width: 60%;
}

</style>

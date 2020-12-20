<template  >
  <div class="container">
    <div id="administrador">
      <h1>ADMINISTRADOR</h1>
    </div>
    <div class="container-column">
      <div class="column-a">
        <form class="entradas">
          <label for="titulo">Titulo:</label><br />
          <input type="text" id="titulo" name="titulo" v-model="form.productoname"/><br />

          <label for="categoria">Categoria:</label><br />
          <input type="text" id="categoria" name="categoria" v-model="form.categoria"/><br />

          <label for="existencia">Cantidad:</label><br />
          <input type="number" id="existencia" name="existencia" v-model="form.existencia"/><br />

          <label for="precio">Precio:</label><br />
          <input type="number" id="precio" name="precio" v-model="form.precio"/><br />

          <label for="descripcion">Descripción:</label><br />
          <textarea name="descripcion" id="descripcion" cols="30" rows="10" v-model="form.descripcion"></textarea><br />

          <label for="imagen">Imagen:</label><br />
          <input type="text" id="imagen" name="imagen" v-model="form.imagen"/><br />
        </form>
      </div>
      <div class="column-b">
        <div class="productos">
            <article  class="product-details">
              <div class="product-picture">
                <img v-bind:src="form.imagen" width="400" height="250" alt="">
              </div>
              <div class="product-description">
                <h2 class="title">{{form.productoname}}</h2>
                <p class="price">  Precio: $<span>{{form.precio}}</span></p>
                <p class="price">  Cantidad:  <span>{{form.existencia}}</span></p>
                <p class="category">Categoria: <span>{{form.categoria}}</span></p>
                <p class="description">Descripcion: <span>{{form.descripcion}}</span></p>

                <section class="action">
                  <input type="text" id ="buscar" v-model="buscar"/><br />
                  <button v-on:click="go()">Buscar</button>
                  <button v-on:click="save()">Guardar</button>
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
      buscar: "",
      producto: {},
      form:{
        "productoname": "",
        "precio": 0,
        "descripcion": "",
        "existencia": 0,
        "categoria": "",
        "imagen": "",
      }
    };
  },

created: function(){
  var self = this
    self.is_auth  = localStorage.getItem('isAuth') || false
    self.username  = localStorage.getItem('current_username')
    if(self.is_auth == false || this.$route.path != '/administrador/' + this.username)
      self.$router.push({name: "user_auth"})
},  

  methods: {
    go: function() {
      if(this.$route.path != '/administrador/'+this.buscar) {
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "administradorProducto", params: {username: username, producto: this.buscar}})
      }
      let self = this;      
      axios.get("http://localhost:8000/productos/" +  this.$route.params.producto)
      //axios.get("https://tienda-virtual12.herokuapp.com/productos/" + this.$route.params.producto)
        .then(response => {
          self.producto = response.data
          self.form = response.data
        })
        .catch((error) => {
          alert("ERROR Servidor")
        });
    },
    save: function(){
      axios.post("http://localhost:8000/productos", this.form)
      //axios.post("https://tienda-virtual12.herokuapp.com/productos", this.form)
      .then(data =>{
        console.log(data)
          .catch((error) => {
            alert("ERROR Servidor")
          });
      })
    },
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
  .action{
    display: flex;
    justify-content:center;
    padding: 10px 0;
    margin:50px;
}
  .action button {
    padding: .8em 1em;
    cursor: pointer;
    outline: none;
    color: white;
    background-color: black;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: bold;
    box-sizing: border-box;
    margin:0px 40px;
}
  .action button:hover{
    color: black;
    background-color: white;
}
#titulos{
  display: flex;
  justify-content:left;
  font-size: 80%;
}
#nuevo{
  margin: 0px 0px 20px 50px;
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

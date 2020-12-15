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
                <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea><br />

                <label for="imagen">Imagen:</label><br />
                <input type="text" id="imagen" name="imagen" /><br />
            </form>
        </div>
        <div class="column-b">
            AQUI DETAILS PRODUCT
        </div>
    </div>
  </div>
</template>

<script>
import Product from './product_details.vue';
export default{
    name:'administrador',
    data () {
        return{
            producto
        }
    }
    
}
</script>

<style>

#administrador {
  background-color: rgb(95, 105, 93);
  margin-bottom: 20px;
  display: block;
}
.entradas input{
    padding: 6px;
    border-radius: 1em;
    border: 2px solid black;
    margin: 15px 50px;
    font-size: 17px;
    width: 80%;    
}
.entradas textarea{
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
label{
    margin: 0px 50px;
}
.container-column{
    display: flex;
    justify-content: space-evenly;
}
.column-a{
    background-color: rgba(0, 255, 255, 0.158);    
    width: 40%;

}
.column-b{
    background-color: rgba(233, 150, 122, 0.199);
    width: 60%;
}
</style>

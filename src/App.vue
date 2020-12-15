<template>
  <div id="app">
<!-------HEADER--------------------->
    <header>
      <div id = 'Header'>
        <header>
          <div id="search-bar">
            <div id="logo"></div>
            <input type="text" placeholder="Buscar..">
          </div> 
        </header>
        <nav>
          <ul>
            <li><a>Productos</a></li>
            <li><a>Ofertas</a></li>
            <li><a>Quienes somos</a></li>
            <li><a>Administrar</a></li>
          </ul>
        </nav>
      </div>
    </header>
<!-------HEADER--------------------->
<!-------BODY--------------------->
    <h1>Bienvenido a su Tienda </h1>
    <router-view></router-view>
<!-------BODY--------------------->
<!-------FOOTER--------------------->
    <footer>
      <div class="container-footer">
        <div class="column">
          <h2>PRODUCTOS</h2>
          <div class="row">
            <h3>Jugueteria</h3>            
          </div>
          <div class="row">            
            <h3>Deporte y fitness</h3>            
          </div>
          <div class="row">            
            <h3>Hogar</h3>
          </div>
        </div>
        <div class="column">
          <h2>QUIENES SOMOS</h2>
          <div class="row">
            <h3>Acerca de nosotros</h3>            
          </div>
          <div class="row">            
            <h3>Trabaja con nosotros</h3>            
          </div>          
        </div>
        <div class="column">
          <h2>TÉRMINOS Y CONDICIONES</h2>
          <div class="row">
            <h3>Aviso de privacidad</h3>            
          </div>
          <div class="row">            
            <h3>Trabaja con nosotros</h3>            
          </div>          
        </div>        
      </div>
      <div class="container-mid-footer">
        <div class="siguenos">
          <h2>SIGUENOS EN NUESTRAS REDES SOCIALES</h2>
          <div id="redes">
            <div><img src="./assets/facebook.png" width="40" height="40" alt=""></div>
            <div><img src="./assets/twitter.png" width="40" height="40" alt=""></div>
            <div><img src="./assets/instagram.png" width="40" height="40" alt=""></div>
          </div>
        </div>
      </div>
      <div class="container-bottom-footer">
        <div class="copyright">
          Copyright 2020. e-commerce inc. Todos los derechos reservados.
        </div>
        

      </div>
    </footer>
<!-------FOOTER--------------------->
  </div> 
</template>

<script>
export default{ 

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 25px;
}
footer{
  width: 100vw;  
}
.container-footer{
  background-color:black;
  color: white;  
  text-align: left;
  display: flex;  
  justify-content: center;
}
.row{
  margin: 10px 15px;  
}
.container-mid-footer{
  color: white;
  background-color: black;
  display: flex;
  justify-content: flex-end;
  font-size: 15px;  
}
.container-bottom-footer{
  color: white;
  background-color:rgb(40,40,40);
  display: flex;
  align-self: flex-end;
  font-size: 20px;  
  padding: 10px; 
}
.column{
  font-size: 20px;
  flex-grow: 1;  
}
#redes{
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
}
h2{
  text-align: center;
  margin: 10px;
  }
  @media screen and (max-width: 1100px){
    .container-footer{
      flex-wrap: wrap;
    }
    .column{
      margin:20px 0px 20px ;
    }
  }
#Header {
  width: 100%;
  margin-bottom: 60px;
}
#Header header {
  height: 126px;
  background-color: #C4C4C4;
}
#Header nav {
  height: 92px;
  color: #FFFFFF;
  padding: 30px 0;
  background-color: #3F3F3F;
}
#Header nav ul {
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
}
#Header nav ul li {
  display: inline-block;
}
#Header nav ul li:hover {
  border-bottom-style: solid;
  border-bottom-color: #00F87C;
  border-bottom-width: 5px;
}

#Header nav ul li a:hover {
  color: #00F87C;
  line-height: 36px;
}

#search-bar {
  position: relative;
  overflow: hidden;
}

#logo {
  display: inline-block;
  margin: 17px 0 17px 50px;
  width: 127px;
  height: 92px;
  background-color: #DFDFDF;
  float: left;
}

#search-bar input[type=text] {
  float: right;
  padding: 6px;
  border-radius: 1em;
  border: 2px solid black;
  margin-top: 39.5px;
  margin-right: 146px;
  font-size: 17px;
}
#search-bar input:focus{
  outline: none;
}
</style>
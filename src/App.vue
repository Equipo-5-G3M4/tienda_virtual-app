<template>
  <div id="app">
   <!--  <img src="./assets/carrito.png" width="480" height="425" alt=""> -->
    <h1>Bienvenido a su Tienda Virtual</h1>
     <router-view></router-view> 
    <Footer/>
  </div> 
</template>

<script>
import Footer from './components/footer.vue'
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 25px;
}
</style>

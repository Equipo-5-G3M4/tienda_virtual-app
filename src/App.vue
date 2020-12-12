<template>
  <div id="app">
    <img src="./assets/carrito.png" width="480" height="425" alt="">
    <Inicio/>
  </div>
</template>

<script>
import Inicio from './components/Inicio'

export default {
  name: 'App',
  components: {
    Inicio
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e05616;
  margin-top: 60px;
  font-size: 25px;
}
</style>

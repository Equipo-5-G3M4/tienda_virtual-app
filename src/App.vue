<template>
  <div id="app">
<!-------HEADER--------------------->
    <header>
      <section>
        <a v-on:click="home"><svg id="logo" height="512" viewBox="0 0 74 74" width="512" xmlns="http://www.w3.org/2000/svg" data-name="color line"><path d="m7.052 28.495h59.426v34.562h-59.426z" fill="#eeefee"/><path d="m62.599 28.494h3.88v34.563h-3.88z" fill="#e1e6e9"/><path d="m14.422 41.369h16.599v21.688h-16.599z" fill="#84879c"/><path d="m31.021 63.557h-16.6a.5.5 0 0 1 -.5-.5v-21.687a.5.5 0 0 1 .5-.5h16.6a.5.5 0 0 1 .5.5v21.687a.5.5 0 0 1 -.5.5zm-16.1-1h15.6v-20.687h-15.6z" fill="#323c6b"/><path d="m38.13 41.369h19.592v13.125h-19.592z" fill="#89c5cd"/><path d="m57.722 54.995h-19.592a.5.5 0 0 1 -.5-.5v-13.125a.5.5 0 0 1 .5-.5h19.592a.5.5 0 0 1 .5.5v13.125a.5.5 0 0 1 -.5.5zm-19.092-1h18.592v-12.125h-18.592z" fill="#323c6b"/><path d="m59.766 54.995h-23.68a.5.5 0 0 1 0-1h23.68a.5.5 0 0 1 0 1z" fill="#323c6b"/><path d="m66.478 63.557h-59.426a.5.5 0 0 1 -.5-.5v-34.557a.5.5 0 0 1 .5-.5h59.426a.5.5 0 0 1 .5.5v34.557a.5.5 0 0 1 -.5.5zm-58.925-1h58.425v-33.557h-58.426z" fill="#323c6b"/><path d="m2.594 63.057h68.342v4.75h-68.342z" fill="#84879c"/><path d="m70.936 68.307h-68.342a.5.5 0 0 1 -.5-.5v-4.75a.5.5 0 0 1 .5-.5h68.342a.5.5 0 0 1 .5.5v4.75a.5.5 0 0 1 -.5.5zm-67.842-1h67.342v-3.75h-67.342z" fill="#323c6b"/><path d="m23.384 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="#fe7058"/><path d="m27.863 33.474a4.984 4.984 0 0 1 -4.979-4.974v-3.5a.5.5 0 0 1 .5-.5h8.957a.5.5 0 0 1 .5.5v3.5a4.984 4.984 0 0 1 -4.978 4.974zm-3.979-7.979v3a3.979 3.979 0 0 0 7.957 0v-3z" fill="#323c6b"/><path d="m32.3 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="#e1e6e9"/><path d="m36.783 33.474a4.984 4.984 0 0 1 -4.983-4.974v-3.5a.5.5 0 0 1 .5-.5h8.957a.5.5 0 0 1 .5.5v3.5a4.984 4.984 0 0 1 -4.974 4.974zm-3.983-7.979v3a3.979 3.979 0 0 0 7.957 0v-3z" fill="#323c6b"/><path d="m5.507 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="#fe7058"/><path d="m9.986 33.474a4.984 4.984 0 0 1 -4.979-4.974v-3.5a.5.5 0 0 1 .5-.5h8.957a.5.5 0 0 1 .5.5v3.5a4.984 4.984 0 0 1 -4.978 4.974zm-3.979-7.979v3a3.978 3.978 0 1 0 7.957 0v-3z" fill="#323c6b"/><path d="m14.427 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="#e1e6e9"/><path d="m18.906 33.474a4.984 4.984 0 0 1 -4.979-4.974v-3.5a.5.5 0 0 1 .5-.5h8.957a.5.5 0 0 1 .5.5v3.5a4.984 4.984 0 0 1 -4.978 4.974zm-3.979-7.979v3a3.979 3.979 0 0 0 7.957 0v-3z" fill="#323c6b"/><path d="m41.225 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="#fe7058"/><path d="m45.7 33.474a4.984 4.984 0 0 1 -4.975-4.974v-3.5a.5.5 0 0 1 .5-.5h8.957a.5.5 0 0 1 .5.5v3.5a4.984 4.984 0 0 1 -4.982 4.974zm-3.979-7.979v3a3.979 3.979 0 0 0 7.957 0v-3z" fill="#323c6b"/><path d="m50.145 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="#e1e6e9"/><path d="m54.624 33.474a4.984 4.984 0 0 1 -4.978-4.974v-3.5a.5.5 0 0 1 .5-.5h8.954a.5.5 0 0 1 .5.5v3.5a4.984 4.984 0 0 1 -4.976 4.974zm-3.978-7.979v3a3.978 3.978 0 1 0 7.957 0v-3z" fill="#323c6b"/><path d="m25.041 13.883-1.657 11.111h8.957l.548-11.111z" fill="#fe7058"/><path d="m32.341 25.495h-8.957a.5.5 0 0 1 -.495-.574l1.657-11.111a.5.5 0 0 1 .495-.426h7.848a.5.5 0 0 1 .5.524l-.548 11.111a.5.5 0 0 1 -.5.476zm-8.377-1h7.9l.5-10.111h-6.892z" fill="#323c6b"/><path d="m32.857 13.883-.552 11.111h8.957l-.557-11.111z" fill="#e1e6e9"/><path d="m41.262 25.495h-8.962a.5.5 0 0 1 -.5-.525l.552-11.111a.5.5 0 0 1 .5-.475h7.848a.5.5 0 0 1 .5.475l.557 11.111a.5.5 0 0 1 -.5.525zm-8.432-1h7.906l-.506-10.111h-6.9z" fill="#323c6b"/><path d="m9.377 13.883-3.87 11.111h8.957l2.761-11.111z" fill="#fe7058"/><path d="m14.464 25.495h-8.957a.5.5 0 0 1 -.472-.665l3.865-11.111a.5.5 0 0 1 .472-.335h7.848a.5.5 0 0 1 .49.616l-2.761 11.115a.5.5 0 0 1 -.485.38zm-8.253-1h7.862l2.513-10.111h-6.854z" fill="#323c6b"/><path d="m17.193 13.883-2.766 11.111h8.957l1.657-11.111z" fill="#e1e6e9"/><path d="m23.384 25.495h-8.956a.5.5 0 0 1 -.485-.621l2.765-11.111a.5.5 0 0 1 .485-.379h7.848a.5.5 0 0 1 .495.574l-1.657 11.11a.5.5 0 0 1 -.495.427zm-8.317-1h7.886l1.508-10.111h-6.878z" fill="#323c6b"/><path d="m40.673 13.883.552 11.111h8.957l-1.661-11.111z" fill="#fe7058"/><path d="m50.182 25.495h-8.957a.5.5 0 0 1 -.5-.475l-.552-11.111a.5.5 0 0 1 .5-.525h7.848a.5.5 0 0 1 .495.426l1.661 11.111a.5.5 0 0 1 -.495.574zm-8.481-1h7.9l-1.511-10.112h-6.89z" fill="#323c6b"/><path d="m48.489 13.883 1.656 11.111h8.957l-2.765-11.111z" fill="#e1e6e9"/><path d="m59.1 25.495h-8.954a.5.5 0 0 1 -.495-.426l-1.657-11.112a.5.5 0 0 1 .495-.574h7.848a.5.5 0 0 1 .485.379l2.765 11.111a.5.5 0 0 1 -.485.621zm-8.525-1h7.886l-2.515-10.112h-6.877z" fill="#323c6b"/><path d="m56.305 13.883 2.761 11.111h8.957l-3.87-11.111z" fill="#fe7058"/><path d="m59.066 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="#fe7058"/><path d="m56.305 13.883 2.761 11.111h8.957l-3.87-11.111z" fill="#fe7058"/><path d="m68.019 24.994v3.5a4.477 4.477 0 0 1 -4.47 4.48 4.6 4.6 0 0 1 -1.82-.38 4.493 4.493 0 0 0 2.66-4.1v-3.5z" fill="#ea6453"/><path d="m68.019 24.994h-3.63l-3.87-11.11h3.63z" fill="#ea6453"/><path d="m59.066 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="none"/><path d="m59.066 24.994v3.5a4.478 4.478 0 1 0 8.957 0v-3.5z" fill="none"/><path d="m63.544 33.474a4.984 4.984 0 0 1 -4.979-4.974v-3.5a.5.5 0 0 1 .5-.5h8.957a.5.5 0 0 1 .5.5v3.5a4.984 4.984 0 0 1 -4.978 4.974zm-3.979-7.979v3a3.979 3.979 0 0 0 7.957 0v-3z" fill="#323c6b"/><path d="m68.022 25.495h-8.957a.5.5 0 0 1 -.485-.379l-2.761-11.116a.5.5 0 0 1 .485-.621h7.848a.5.5 0 0 1 .472.335l3.87 11.111a.5.5 0 0 1 -.472.665zm-8.566-1h7.862l-3.518-10.112h-6.856z" fill="#323c6b"/><path d="m61.64 6.349h-49.75a2.671 2.671 0 0 0 -2.671 2.671v5.28h55.092v-5.28a2.671 2.671 0 0 0 -2.671-2.671z" fill="#9297ab"/><path d="m64.309 9.024v5.276h-3v-2.23a2.67 2.67 0 0 0 -2.67-2.67h-49.42v-.38a2.678 2.678 0 0 1 2.67-2.68h49.75a2.672 2.672 0 0 1 2.67 2.684z" fill="#84879c"/><path d="m64.311 14.8h-55.092a.5.5 0 0 1 -.5-.5v-5.28a3.174 3.174 0 0 1 3.171-3.171h49.75a3.175 3.175 0 0 1 3.171 3.171v5.28a.5.5 0 0 1 -.5.5zm-54.592-1h54.092v-4.78a2.173 2.173 0 0 0 -2.171-2.171h-49.75a2.173 2.173 0 0 0 -2.171 2.171z" fill="#323c6b"/><path d="m28.137 52.984a.5.5 0 0 1 -.5-.5v-7.661a.5.5 0 0 1 1 0v7.662a.5.5 0 0 1 -.5.499z" fill="#fff"/><path d="m28.137 56.2a.5.5 0 0 1 -.5-.5v-.729a.5.5 0 0 1 1 0v.729a.5.5 0 0 1 -.5.5z" fill="#fff"/><g fill="#323c6b"><path d="m69.478 43.167a.5.5 0 0 1 -.5-.5v-1.167a.5.5 0 0 1 1 0v1.167a.5.5 0 0 1 -.5.5z"/><path d="m69.478 54.25a.5.5 0 0 1 -.5-.5v-8.083a.5.5 0 0 1 1 0v8.083a.5.5 0 0 1 -.5.5z"/><path d="m22.333 3.849h-.9a.5.5 0 0 1 0-1h.9a.5.5 0 0 1 0 1z"/><path d="m35.5 3.849h-10.5a.5.5 0 0 1 0-1h10.5a.5.5 0 0 1 0 1z"/></g></svg></a>
        <input id="search" type="text" placeholder="Buscar...">
        <div id="cart">
          <a><svg height="512" viewBox="0 0 511.334 511.334" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m506.887 114.74c-3.979-5.097-10.086-8.076-16.553-8.076h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468l23.018 256.439c.005.302-.01.599.007.903.047.806.152 1.594.286 2.37l.842 9.376c.016.177.034.354.055.529 2.552 22.11 13.851 41.267 30.19 54.21-8.466 10.812-13.532 24.407-13.532 39.172 0 35.106 28.561 63.667 63.666 63.667 35.106 0 63.667-28.561 63.667-63.667 0-7.605-1.345-14.9-3.801-21.667h114.936c-2.457 6.767-3.801 14.062-3.801 21.667 0 35.106 28.561 63.667 63.667 63.667s63.667-28.561 63.667-63.667-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c1.567-6.272.158-12.918-3.821-18.016z"/></svg></a>
        </div>
      </section>
      <nav>
        <ul>
          <li id="home">
            <a v-on:click="home"><svg height="511pt" viewBox="0 1 511 511.999" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"/></svg></a>
          </li>
          <li><a v-on:click="home">Productos</a></li>
          <li><a>Ofertas</a></li>
          <li><a>Quienes somos</a></li>
          <li><a v-on:click="admin">Administrador</a></li>
          <button v-on:click="logOut" v-if="is_auth" >Cerrar Sesión</button>          
        </ul>
      </nav>
    </header>
<!-------HEADER--------------------->
<!-------BODY--------------------->
      <router-view v-on:log-in="logIn" >  </router-view>
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
  name: 'App', 
  
  data: function(){
      return{ 
        is_auth: localStorage.getItem('isAuth') || false
      
        
      }    
  },


  methods : {
    home : function() {
      if(this.$route.path != '/') {
        this.$router.push({name: 'root'})
      }
    },
    admin: function () {
      if(this.$route.path != '/user/auth') {
        this.$router.push({name: 'user_auth'})
      }
    },

    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false
      if(self.is_auth == false)
        self.$router.push({name: "user_auth"})
      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },
    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },
    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },
    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
    },
    created: function(){
    this.$router.push({name: "root"})
    this.updateAuth()
  }

    
  }
}
</script>

<style>
.link{
  align-content: center;
  margin: 10px 160px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a:hover {
  cursor: pointer;
}
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 25px;
}
footer{
  margin: 10px 0px;
  width: 100%;
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
#app header section {
  width: 100%;
  height: 126px;
  background-color: #C4C4C4;
  overflow: hidden;
}
#search {
  width: 230px;
  height: 50px;
  margin-right: 50px;
  margin-top: 38px;
  font-size: 26px;
  padding-left: 15px;
  font-weight: 300;
  background-color: rgba(255, 255, 255, 0.4);
  border: 4px #000000 solid;
  border-radius: 20px;
  float: right;
}
#search:focus {
  outline: none;
}
#cart {
  background-color: #E4E4E4;
  width: 50px;
  height: 50px;
  margin-right: 45px;
  margin-top: 38px;
  border: 2px #000000 solid;
  border-radius: 50%;
  float: right;
}
#cart a svg {
  width: 35px;
  height: 35px;
  position: relative;
  top: 8px;
  left: 1px;
}
#logo {
  width: 127px;
  height: 92px;
  margin-left: 50px;
  margin-top: 17px;
  float: left;
}
#app nav {
  width: 100%;
}
#app nav ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  list-style: none;
  margin: 0;
  padding: 0 20px;
  background: #3F3F3F;
}
#app header nav a{
  text-decoration: none;
  display: block;
  padding: 0.3em;
  margin: 0.5em;
  color: white;

  font-size: 20px;
  font-weight: 600;
}
#app header nav a:hover {
  border-bottom: 5px #00F87C solid;
  color: #00F87C;
}
#home a {
  border: 2px #FFFFFF solid;
  border-radius: 25px;
}
#home a:hover {
  border: 2px #00F87C solid !important;
}
#home a svg {
  height: 20px;
  width: 20px;
  fill: white;
  position: relative;
  top: 2px;
}
#home a svg:hover {
  fill: #00F87C;
}
@media all and (max-width: 800px) {
  #header nav ul {
    justify-content: space-around;
  }
}
@media all and (max-width: 600px) {
  #header nav ul {
    flex-flow: column wrap;
    padding: 0;
  }
  #header nav ul a {
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255,0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  #header nav ul li:last-of-type a {
    border-bottom: none;
  }
}
</style>

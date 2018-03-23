<template>
  <div id="app">
    <v-toolbar color="grey darken-4" class="white--text"> 
      
        <img height="50px" src="./assets/logo.png" >
        <v-toolbar-title>CONTACTS</v-toolbar-title> 
        
        <v-spacer></v-spacer>
        <v-toolbar-items class="hello">
          <v-btn v-on:click= "change()" class="white--text" style="border:0px">
            <i class="material-icons" style="font-size:35px; padding-bottom: 10px">person</i>         
          </v-btn>
        </v-toolbar-items>    
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/home.vue'
export default {
  name: 'app',
  components: {
    home
  },
  methods: {
      change (){
        this.$router.push('/')      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



li {

    display: block;
    color: white;
    text-align: left ;
    padding: 20px 20px;
    text-decoration: none;

}
.button{
    border: none;
    border-radius: 2px;

}

.button-close{
    background-color: pink;

}
.logo {
  list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;

}
</style>

<template>
    <v-container style="color: #01579B;">
        <v-layout row > 
            <v-flex style="padding-top: 5%">
                <v-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19); padding:5%;width: 50%;margin-left: auto; margin-right: auto;">
                    <h2 style="padding-bottom:5%; margin-bottom: 5%; border-bottom: #64B5F6 2px solid">Login</h2>
                    <v-layout>
                        <i class="material-icons" style="font-size:40px;padding-right: 10px;">account_circle</i>
                        <v-text-field id="testing" name="input-1" label="User Account" placeholder="User Account" v-model="formData.username"></v-text-field>
                    </v-layout>
                    <v-layout>
                        <i class="material-icons" style="font-size:40px;padding-right: 10px;">https</i>
                        <v-text-field name="input-1" type="password" label="Password" placeholder="Password" v-model="formData.password"></v-text-field>
                    </v-layout>
                    
                    <v-btn flat color="#01579B"  v-on:click="userlogin()" style="width: 80%; height:50px;box-shadow: 10px 10px 5px grey; font-size:20px">Login</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'login',
    data (){
        return{
            formData:{
              username: '',
              password: ''
            }
        }
    },
  methods: {
        userlogin (){
            Vue.$http.get('http://localhost:3000/login')
            .then ((response) => {
                if(this.formData.username == response.data[0].username && this.formData.password == response.data[0].password){
                // alert("Logged in!")
                this.$router.push('/home')  
                }
                else
                alert("Wrong username or password")
            })
            .catch((error) => {
              console.log(error)
            })
        },
        change (){
            
        },
    }
}
</script>



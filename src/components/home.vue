<template>
    <v-container grid-list-md style="color: #01579B">
        <v-layout row style="border-bottom: #64B5F6 2px solid; padding: 15px;background-color: #ECEFF1">
            <v-flex md10 style="padding-top: 10px;margin-right: 0px;padding-right:0px">
                <v-text-field name="input-1" label=" Search.." id="testing" style="height: 50px;background-color: white" v-model="searchbox"></v-text-field>
            </v-flex>
             <!-- <v-flex md2 style="margin-left: 0px;padding-left:0px;margin-right: 0px;padding-right:0px">
                <v-btn depressed color="whitetext" style="background-color: #757575;height: 50px; font-color: black;width: 100%;margin-left: 0px;padding-left:0px;margin-right: 0px;padding-right:0px">Search</v-btn>
            </v-flex> -->
            <v-flex md2 style="margin-left: 0px;padding-left:0px;margin-right: 0px;padding-right:0px">
                <v-btn v-on:click= "add()" depressed color="blue darken-4 white--text" style="height: 50px;width: 100%;margin-left: auto;padding-left:auto;margin-right: auto;padding-right:0px ">
                    <i class="material-icons" style="padding-bottom:5px; padding-right:5px">add</i> Add
                </v-btn>
            </v-flex> 
        </v-layout>
        <v-layout columm wrap>
            <v-flex xs3 v-for="x in filterdUsers" v-bind:key="x">
                <v-card>
                    <img height="100%" width="100%" v-bind:src="x.imageurl" alt="">
                        <v-flex>
                            <b width="100%" style="color: black; font-size: 15px; overflow: auto">{{x.firstname}} {{ x.lastname}}  </b>
                            <br>
                            <a style="color: black; font-size: 13px">Mobile: {{x.mobile}} </a>
                            <br>
                            <a style="color: black; font-size: 13px">Email: {{x.email}}</a>
                            <br>
                            <a style="color: black; font-size: 13px">Facebook: {{x.facebook}}</a>
                            <br>
                        </v-flex>
                        <v-layout row tyle="border-bottom: #64B5F6 10px solid;">
                            <v-flex md4 offset-md2>
                                <router-link :to="{ path: '/edit/' + x._id}">
                                    <v-btn depressed color="white--text" style="background-color: #01579B;height: 50px; font-color: black;width: 100%;margin-left: 0px;padding-left:0px;margin-right: 0px;padding-right:0px">
                                        <i class="material-icons" style="padding-bottom: 10px">edit</i>
                                    </v-btn>
                                </router-link>
                            </v-flex>
                            <v-flex md4>
                                <v-btn depressed color="white--text" @click="deleteuser(x._id)" style="background-color: #BF360C;height: 50px; font-color: black;width: 100%;margin-left: 0px;padding-left:0px;margin-right: 0px;padding-right:0px">
                                    <i class="material-icons" style="padding-bottom: 10px">delete</i>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'home',
    data() {
      return {
        Users: [],
        searchbox: ''
      }
    },
    methods: {
        add (){
            this.$router.push('/add')      
        },
        edit (){
            this.$router.push('/edit')
        },
        deleteuser (userId) {
        var url = 'http://localhost:3000/users/' + userId
        Vue.$http.delete(url)
            .then((response) => {
            console.log('Delete UserId: ' + response)
            })
            .catch((error) => {
            console.log(error)
            })
        window.location.reload()
        }
    },
    computed: {
        filterdUsers: function () {
            return this.Users.filter((user) => {
                // return user.firstname.match(this.search)
                 return user.firstname.match(this.searchbox)
            })
        }
    },
    mounted () {
    Vue.$http.get('http://localhost:3000/users')
        .then((response) => {
        console.log(response.data)
        this.Users = response.data
        })
        .catch((error) => {
        console.log(error)
        })
    } 
}
</script>

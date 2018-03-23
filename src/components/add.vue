<template>
    <v-container grid-list-md style="color: #01579B;">
        <v-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);padding: 5%; margin-left: auto; width: 80%; margin-right: auto; margin-top:80px; margin-bottom: 80px">
        <v-layout row style="border-bottom: #64B5F6 2px solid; padding-bottom: 10px">
            <b style ="font-size: 22px; color:#01579B" >Contact</b>
        </v-layout >
        
         <v-layout row style="padding-top: 30px">
            <v-flex xs12>
            <v-text-field  type="text" name="id" label="Contact ID" placeholder="Contact ID" v-model="User.contactID"></v-text-field>
            </v-flex>
        </v-layout>
        
        <v-layout row>
            <v-flex xs12>
            <v-text-field  type="text" name="firstname" label="First Name" placeholder="First Name" v-model="User.firstname"></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
            <v-text-field  type="text" name="lastname" label="Last Name" placeholder="Last Name" v-model="User.lastname"></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
            <v-text-field  type="text" name="mobile" label="Mobile No." placeholder="Mobile No." v-model="User.mobile" ></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
            <v-text-field  type="text" name="email" label="Email" placeholder="Email" v-model="User.email"></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
            <v-text-field  type="text" name="facebook" label="Facebook" placeholder="Facebook" v-model="User.facebook"></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex xs12>
            <v-text-field  type="text" name="imageurl" label="Image Url" placeholder="Image Url" v-model="User.imageurl"></v-text-field>
            </v-flex>
        </v-layout>
        
        <v-layout row tyle="border-bottom: #64B5F6 10px solid;">
            <v-flex md4 offset-md2>
                <v-btn color="#01579B white--text" @click="addToAPI" style=" background-color: #01579B; height: 50px; font-color: white;width: 100%">
                    <i class="material-icons" style="padding-bottom:5px; padding-right:10px">save </i> Save
                </v-btn>
            </v-flex>
            <v-flex md4>
                <v-btn color="#BF360C white--text" v-on:click= 'change()' style="background-color: #BF360C;height: 50px; font-color: black;width: 100%">
                    <i class="material-icons" style="padding-bottom:5px; padding-right:10px">clear</i>Close
                </v-btn>
            </v-flex>
        </v-layout>
        </v-card>
    </v-container>
</template> 

<script>
import Vue from 'vue'

export default {
  data() {
      return {
        User: {
            contactID: '',
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            facebook: '',
            imageurl: ''
        }
    }
  },
  methods: {
    change (){
        this.$router.push('/home')      
    },
    addToAPI () {
      let newUser = {
        contactID: this.User.contactID,
        firstname: this.User.firstname,
        lastname: this.User.lastname,
        email: this.User.email,
        mobile: this.User.mobile,
        facebook: this.User.facebook,
        imageurl: this.User.imageurl
      }
      console.log(newUser)
       Vue.$http.post('http://localhost:3000/users', newUser)
        .then((response) => {
          alert("Added")  
          console.log(response)
          
        })
        .catch((error) => {
          console.log(error)
        }),
        this.$router.push('/home') 
    }
  }
}
</script>

  
 
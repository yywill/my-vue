<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center">Login</h3>
          <div class="form-group">
            <input v-model="email" type="text" placeholder="EMail" class="form-control">
            <div class="errors" v-if="errors.email">
                <small class="text-danger" :key="error" v-for="error in errors.email"  >{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input v-model="password" type="passowrd" placeholder="password" class="form-control">
            <div class="errors" v-if="errors.password">
                <small class="text-danger" :key="error" v-for="error in errors.password"  >{{error}}</small>
            </div>
          </div>
          <div class="form-group text-center">
            <button @click="login()" class="btn form-control btn-success">login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Axios from 'axios';

export default {
  data(){
    return{
      email: '',
      assword: '',
      errors:{},
      loading: false
    }
    
  },

  methods:{
    login(){
      this.loading = true;
      Axios.post("https://react-blog-api.bahdcasts.com/api/auth/login",{
        email: this.email,
        password: this.password
      })
      .then(({data}) => {
        this.errors = {};
        localStorage.setItem('auth', JSON.stringify(data.data))
        this.$root.auth = data.data;
        this.$router.push('home')
        this.loading = false;
        console.log(data)
      })
      .catch(({response}) => {
        this.$noty.error("Oops... Something Wrong")
        if(response.status === 401){
          this.errors = {
            'email': ['password not match']
          }
        }else{
          
          this.errors = response.data
        }
        console.log(response); 
      })
    }
  }
}
</script>
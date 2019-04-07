<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center">Signup</h3>
          <div class="form-group">
            <input v-model="name" type="text" placeholder="Name" class="form-control">
            <div class="errors" v-if="errors">
                <small class="text-danger" :key="error" v-for="error in errors.name"  >{{error}}</small>
            </div>
          </div>
          <div class="form-group">
            <input v-model="email" type="text" placeholder="EMail" class="form-control">
          </div>
          <div class="form-group">
            <input v-model="password" type="password" placeholder="password" class="form-control">
          </div>
          <div class="form-group text-center">
            <button @click="register()" class="btn form-control btn-success">Signup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      errors: {
        name: null,
        email: null,
        password: null
      }
    };
  },
  methods: {
    register() {
      axios
        .post(
          "https://react-blog-api.bahdcasts.com/api/auth/register",
          {
            name: this.name,
            email: this.email,
            password: this.password
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }
        )
        .then(({data}) => {
          localStorage.setItem('auth', JSON.stringify(data.data))
          this.$root.auth = data.data;
          this.$router.push('home')
        })
        .catch(({ response }) => {
          this.errors = response.data
        });
    }
  },
  computed:{
    hasError(){
      return this.errors 
    }
  }
};
</script>
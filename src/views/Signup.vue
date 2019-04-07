<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center">Signup</h3>
          <div class="form-group">
            <input v-model="name" type="text" placeholder="Name" class="form-control">
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
  date() {
    return {
      email: "",
      name: "",
      password: ""
    };
  },
  methods: {
    register() {
      console.log(this.email, this.name, this.password);
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
          console.log(response)
        });
    }
  }
};
</script>
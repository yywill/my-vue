<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card" v-if="!loading">
          <img :src="article.imageUrl" alt class="card-img-top">
          <div class="card-body">
              <h1 class="card-title text-center">

                  {{article.title}}
              </h1>
              <div class="article-content" v-html="article.content">

              </div>
          </div>
        </div>
        <div class="loader" v-else>
            <i v-if="loading" class="fas fa-5x fa-spin fa-spinner"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";

export default {
  data() {
    return {
      article: {},
      loading: true
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      axios
        .get(`${config.apiUrl}/api/article/${this.$route.params.id}`, {})
        .then(res => {
          this.loading = false;
          console.log(res);
          this.article = res.data.data;
        })
        .catch(({ response }) => {
          console.error(response);
          this.$noty.error(response);
        });
    }
  }
};
</script>
<template>
  <div class="card my-3">
    <div class="card-header font-weight-bolder">{{article.title}}</div>
    <div class="card-body">
      <div class="my-3" v-html="article.content.substring(0,2000)"></div>
      <router-link :to="`/article/${article.id}`" class="btn btn-primary">Read More</router-link>
    </div>
  </div>
</template>


<script>
export default {
  props: ["article"]
};
</script>
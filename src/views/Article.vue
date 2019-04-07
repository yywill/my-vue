<template>
<div class="card">
    <div class="card-header font-weight-bolder">
        {{article.title}}
    </div>
    <div class="card-body">
        {{article.content}}
    </div>
</div>
    
</template>

<script>
import axios from 'axios';
import config from '@/config' ;

export default {
    data(){
        return {
            article: {}
        }
    },
    mounted(){
        this.getArticle();
    },
    methods:{
        getArticle(){
            axios.get(`${config.apiUrl}/api/article/${this.$route.params.id}`,{})
            .then(res => {
                console.log(res)
                this.article = res.data.data
                
            })
            .catch(({response}) => {
                console.error(response); 
                this.$noty.error(response)
            })
        }
    }
}
</script>
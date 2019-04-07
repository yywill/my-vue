<template>
    <div class="row">
        <div class="col-md-8 offset-md-2" v-if="articles.data" :key="artcile.id" v-for="artcile in articles.data">
            <Article :article="artcile"></Article>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import config from "@/config";
import Article from '@/components/Article.vue'

export default {
    components:{
        Article
    },

    data(){
        return {
           articles: {}
        }
    },
    mounted(){
        this.getArticles();
    },

    methods: {
        getArticles(){
            axios.get(`${config.apiUrl}/api/articles`, {
                params: {
                    
                }
            })
            .then(res => {
                this.articles = res.data.data;
                console.log(res);
            }).catch(({response})=>{
                console.log(response)
            })
        }
    }

}
</script>
<template>
<div>
    <div class="d-flex mt-4 justify-content-between">
        <button  @click="getNextArticles()" :disabled="articles.prev_page_url === null" class="btn btn-warning">Prev</button>
        <button  @click="getNextArticles()" :disabled="articles.next_page_url === null"  class="btn btn-warning">Next</button>
    </div>
     <div class="row">
        <div class="col-md-8 offset-md-2" v-if="articles.data" :key="artcile.id" v-for="artcile in articles.data">
            <Article :article="artcile"></Article>
        </div>

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
        getArticles(url=`${config.apiUrl}/api/articles`){
            axios.get(url, {
                params: {
                    
                }
            })
            .then(res => {
                this.articles = res.data.data;
                console.log(res);
            }).catch(({response})=>{
                console.log(response)
            })
        },

        getNextArticles(){
            this.getArticles(this.articles.next_page_url)
        },
         getPrevArticles(){
            this.getArticles(this.articles.prev_page_url)
        }
    }

}
</script>
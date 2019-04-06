

/* eslint-disable no-console */
/* eslint-disable no-undef */

Vue.component(
    'card',
    {
        props:[
            'title', 'content'
        ],
        data: function(){
            return {
                claps : 0
            }
        }
        ,
        template: `
        <div class="card">
            <div class="card-body">
                <h3 class="card-tittle">

                    {{title}}

                </h3>
                <div class="card-text">
                    {{content}}

                </div>
                <div class="text-center text-muted display-3">
                    {{claps}}

                </div>
                <button @click="clapForMe" class="btn btn-info btn-sm"> Clap for me </button>
  
                <button @click="deleteArticle" class="btn btn-danger btn-sm"> Delete </button>
            </div>
        </div>
        `,
        methods: {
            deleteArticle(){
                
                this.$emit('delete-article', this.title)
            },
            clapForMe(){
                
                this.claps ++
            },
        },
    }

)

new Vue({
    el: '#app',
    data:{
        articles:[
            {
                title: "Building fullstack ",
                content: "William Yang's Award"
            },
            {
                title: "Advanced Frontend Dev",
                content: "D Yang's Award"
            },
            {
                title: "Java Backend",
                content: "William Yang's fist Job"
            },
    ]
    },
    methods: {
        deletethisArticle(event){
            console.log('delete', event);
            this.articles = this.articles.filter(article => article.title !== event)
        }
    }
});





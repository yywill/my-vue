/* eslint-disable no-console */
/* eslint-disable no-undef */


new Vue({
    el: '#app',
    data:{
        currencies:{},
        amount:0,
        from:'',
        to:''
    },
    mounted() {
        this.getCurrencies();
        
    },
    methods: {
        getCurrencies(){
            const currencies = localStorage.getItem('currencies')

            if (currencies){
                this.currencies = JSON.parse(currencies)
                return ;
            }
            axios.get("https://free.currencyconverterapi.com/api/v6/currencies?apiKey=sample-api-key")
            .then(res => {
                this.currencies = res.data.results
                localStorage.setItem('currencies', JSON.stringify(res.data.results))
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    computed: {
        formattedCurrencies(){
            return Object.values(this.currencies)
        }
    },
});



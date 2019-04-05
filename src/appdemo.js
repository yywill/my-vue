/* eslint-disable no-console */
/* eslint-disable no-undef */


new Vue({
    el: '#app',
    data:{
        currencies:{},
        amount:0,
        computed_amount:0,
        loading: false,
        from:'',
        to:''
    },
    mounted() {
        this.getCurrencies();
        this.computed_amount = this.amount
    },
    methods: {
        getCurrencies(){
            const currencies = localStorage.getItem('currencies')

            if (currencies){
                this.currencies = JSON.parse(currencies)
                return ;
            }
            axios.get("https://free.currencyconverterapi.com/api/v6/currencies?apiKey=0c041c2c7d7aa0a329fd")
            .then(res => {
                this.currencies = res.data.results
                localStorage.setItem('currencies', JSON.stringify(res.data.results))
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
        },
        getRate(){
            this.loading = true;
            axios.get(`https://free.currencyconverterapi.com/api/v6/convert?q=${this.from}_${this.to}&compact=ultra&apiKey=0c041c2c7d7aa0a329fd`)
            .then(res => {
                console.log(res)
                rate = res.data[`${this.from}_${this.to}`]
                this.computed_amount = (this.amount * rate).toFixed(3)
                this.loading =false;
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    computed: {
        formattedCurrencies(){
            return Object.values(this.currencies)
        },
        disableButton(){
            return this.amount ===0 || !this.amount || this.loading;
        }
    },
    watch: {
        from(){
            this.computed_amount = 0;
        },
        to(){
            this.computed_amount =0;
        }
    },
});



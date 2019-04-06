<template>
 <div class="container">
   <div class="row">
     <div class="col-md-7">
       <div class="row">
            <div :key="product.id" class="col-md-6" v-for="product in products">
              <Product :isInCart="isInCart(product)" v-on:add-to-cart="addToCart(product)" :product="product"></Product>
            </div>
            
        </div>

        <div class="row">
          
        </div>
        
       </div>

       <div class="col-md-5">
         <cart v-on:clear="clear()" v-on:remove-item="removeItem($event)" :items="cart"></cart>
       </div>
        
     </div>
     <div class="col-md-5">
     </div>
     
   </div>
</template>

<script>
import products from '@/products.json';
import Product from '@/components/Product.vue';
import Cart from '@/components/Cart.vue'

export default {
  name: 'app',
  components:{
    Product,
    Cart
  },
  data(){
    return {
      products,
      cart:[]
    }
  },
  methods:{
    addToCart(prod){
      this.cart.push(prod);
    },
    isInCart(prod){
      const findone = this.cart.find(p=>p.id === prod.id);
      if(findone){
        return true;
      }else{
        return false;
      }
    },
    removeItem(item){
      this.cart = this.cart.filter(p=> p.id !== item.id);
    },
    clear(){
      this.cart=[];
    }
  }
}

</script>

<style>
body {
  background-color: #FBF8F3
}
</style>

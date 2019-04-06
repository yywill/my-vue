<template>
<div>
    <ul class="list-group">
       <li :key="item.id" v-for="item in items" class="list-group-item">
           {{item.title}} - ${{item.price}}
           <button @click="$emit('remove-item', item)" class="btn badge badge-danger float-right">
               remove from cart
           </button>
       </li>
   </ul>
   <div class="card my-5 p-3">
       <h4 class="text-center">
           total $ {{total}}
       </h4>
   </div>

   <button :disabled="items.length === 0" @click="$emit('clear')" class="btn btn-info form-control">
       Pay Now
   </button>
</div>
   
</template>
<script>
export default {
    props:['items'],
    computed:{
        total(){
            return this.items.reduce((acc, j) =>acc+ Number(j.price), 0);
        }
    }
}
</script>
<template>
    <div class="card my-5">
        <div class="card-body">
            <h5 class="text-center card-title">{{product.title}}</h5>
            <p class="text-center text-muted card-text display-4">{{product.price}} </p>
            <button :disabled="isInCart" @click="$emit('add-to-cart')" class="btn btn-primary form-control">
                {{isInCart ? "is in cart" : "add to cart"}}
                </button>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['product', 'isInCart']
}
</script>


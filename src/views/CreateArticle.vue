<template>
    <div class="container">
        <div class="card p-3">
            <div class="card-title">
                    <input placeholder="title" type="text" class="form-control">
            </div>
            
            <wysiwyg class="my-3 md-3" v-model="content"></wysiwyg>
            
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            content : ""
        }
    }
    
}
</script>
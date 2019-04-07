<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                    <input placeholder="title" type="text" class="form-control">
            </div>
            <wysiwyg v-model="content"></wysiwyg>
            
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
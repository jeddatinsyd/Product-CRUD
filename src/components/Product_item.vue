<template>
    <div class="float-left">

                    <span class="float-right" >
                        {{product_items.title}} {{product_items.description}} {{product_items.category}}
                        <i class="edit" @click="$emit('edit-product-item', product_items.id)" v-if="!product_items.completed">edit</i>
                        <i class="del" @click="$emit('del-product-item', product_items.id)">delete</i>
                    </span>        
                 
    </div>
</template>

<script>
    export default {
        name: "ProductItem",
        props : ["product_items"]
    }
</script>

<style scoped>
    .product-items{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
   
    .del{
        color: #bd2130;
        border-color: #b21f2d;
        vertical-align: middle;
        cursor: pointer;
    }
    .edit{
        color: #117a8b;
        border-color: #10707f;
        vertical-align: middle;
        cursor: pointer;
        margin-left: 5px;
        margin-right: 10px;
    }
 
</style>
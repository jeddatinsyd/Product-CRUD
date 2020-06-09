<template>
    <div>
        <h2>Manage Product</h2>
        <div>
        <p v-if="!product_items.length">Your Product List is empty. Add something! </p>
        <div v-bind:key="product_items.id" v-for="product_items in product_items">
            <ProductItem v-bind:product_items="product_items" v-on:del-product-item="delMethod" v-on:edit-product-item="editMethod"></ProductItem>
        </div>
    </div>
    </div>
</template>

<script>
import ProductItem from './Product_item.vue';
    export default {
        name: "Products",
        props:["product_items"],
        components: {
            ProductItem
        },
         methods: {
            delMethod(id){
                //send to parent
                this.$emit('del-product-event', id);
            },
           
            editMethod(id){
                //send to parent
                this.$emit('edit-product-event', id);
            }
        }
    }
</script>

<style scoped>
</style>
<template>
    <div id="index">
        <h1 align="left">My Dashboard</h1>

            <div>
                <Products v-bind:product_items="product_items" v-on:del-product-event="deleteProductItem" v-on:edit-product-event="editProductItem"></Products>
            </div>
            <AddProductItem v-on:add-product-event="addProductMethod" v-on:edit-product-event="editProductItemEvent" v-bind:edit_data="edit_data"></AddProductItem>
        
    </div>
</template>

<script>
import Products from './Products.vue'
import AddProductItem from './AddProduct'

    export default {
        components:{
            Products,
            AddProductItem
        },
        name: 'Index',
        data() {
            return {
                product_items:[],
                edit_data:{
                    product_items:'',
                    id:''
                }
            }
        },

        methods: {
        addProductMethod(newProductItem){
            this.product_items.unshift(newProductItem);
        },
        deleteProductItem(id){
            this.product_items = this.product_items.filter(todo_item => todo_item.id !== id);
        },
        markComplete(id){
          
            var objIndex = this.product_items.findIndex(obj => obj.id === id);
            this.product_items[objIndex].completed = !this.product_items[objIndex].completed;
        },
        editProductItem(id){
           
            var objIndex = this.product_items.findIndex(obj => obj.id === id);
            console.log(objIndex);
            this.edit_data.title = this.product_items[objIndex].title;
            this.edit_data.description = this.product_items[objIndex].description;
            this.edit_data.category = this.product_items[objIndex].category;
            this.edit_data.id= id;
        },
        editProductItemEvent(todoItem){
          
            var objIndex = this.product_items.findIndex(obj => obj.id === todoItem.id);
            this.product_items[objIndex].title = todoItem.title;
            this.product_items[objIndex].description = todoItem.description;
            this.product_items[objIndex].category = todoItem.category;
        }
    },
    mounted(){
      console.log('App Mounted');
        if (localStorage.getItem('product_items'))
            this.product_items = JSON.parse(localStorage.getItem('product_items'));
    },
    watch: {
        product_items: {
            handler() {
                console.log('Product Items array changed!');
                localStorage.setItem('product_items', JSON.stringify(this.product_items));
            },
            deep: true,
        },
    },
    }
</script>

<style scoped>
    #index {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 40px;
    }
    .center_div{
        margin: 0 auto;
        width: 80%
    }
</style>
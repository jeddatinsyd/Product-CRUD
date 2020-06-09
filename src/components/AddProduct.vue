<template>
    <div>
        <form @submit="addTodo" >
          
               <div><input type="text" v-model="title" name="title" placeholder="Product Name"></div>
               <div><input type="text" v-model="description" name="description" placeholder="Description"></div>
               <label for="category">Choose category:</label> 
                        <select v-model="category" name="category" id="category">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
            <div >
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</template>

<script>
    import uuid from 'uuid/v4';
    export default {
        name: "AddProductItem",
        props: ['edit_data'],
        data(){
            return {
                title: '',
                id: '',
                description:'',
                category:'',
                edit: false
            }
        },
        methods: {
            addTodo(e){
                e.preventDefault();
                if(this.edit === false){
                    //add new item
                    const newProductItem = {
                        title: this.title,
                        description:this.description,
                        category:this.category,
                        id: uuid(),
                        completed: false
                    }
                    //send to parent
                    this.$emit('add-product-event', newProductItem);
                    //clear the field
                    this.title='';
                    this.description='';
                    this.category='';
                }else{
                    //edit item
                    const productItem = {
                        title: this.title,
                        description:this.description,
                        category:this.category,
                        id: this.id,
                        completed: false
                    }
                    //send to parent
                    this.$emit('edit-product-event', productItem);
                    //clear the field
                    this.title='';
                    this.description='';
                    this.category='';
                    this.edit === false;
                }
            }
        },
        watch: {
            edit_data: {
                handler() {
                    this.title = this.edit_data.title;
                    this.description = this.edit_data.description;
                    this.category = this.edit_data.category;
                    this.id = this.edit_data.id;
                    this.edit = true;
                },
                deep: true,
            },
            title:{
                handler(){
                    if(this.title === ''){
                        this.edit = false;
                    }
                }
            }
        },
    }
</script>

<style scoped>
    input[type="text"]{
        flex:10;
        padding: 5px;
    }
    input[type="submit"]{
        flex: 2;
    }
    /* select[type=""] */
</style>
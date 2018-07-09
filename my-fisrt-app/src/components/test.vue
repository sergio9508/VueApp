<template>
    <div>
        <div v-text="title">
        </div>
        <div v-if="showname">
            <p>{{user.firstName}}</p>
        </div>
        <div v-else>
            <p>no puedo mostrar nombre</p>
        </div>
        <hr>
        <ul>
            <li v-for="tareas in tareas" :key="tareas.id">
                {{tareas.title}}
            </li>
        </ul>
        <hr>
        <input type="text" v-model="user.firstName">
        <button type="button" v-on:click='saludar(user.firstName)'>
            Saludar
        </button>
        <input type="text" v-on:keyup.enter="typing">
        <hr>    
        <p>
            {{fullName}}, {{msg}}
        </p>


    </div>
</template>
<script>
    export default{
        data(){
            return{
                title: 'Hola Vue.js',
                user: {
                    firstName: 'Joe',
                    lastName: 'McMillian'
                },
                mihtml: '<h3>Holaaa</h3>',
                showname: false,
                tareas:[
                    {title: 'email'},
                    {title: 'work'}
                ]
            }

        },
        methods: {
            saludar(firstname){
                alert('Hello '+ firstname)
            },
            typing(e){
                console.log("enter")
                
            }
        },
        computed: {
            fullName(){
                return this.user.firstName +" "+ this.user.lastName
            }

        },
        props:{
            msg:{
                type: String,
                default: 'defecto'
            }
        }
    }
</script>
<style>
body{
    background: violet;
}
</style>
